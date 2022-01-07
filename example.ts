import { init } from './build/lib';

(async () => {
  let { em, Z3 } = await init();

  function sudokuToConstraints(str: string) {
    let constraints = [];

    let lines = str.trim().split('\n');
    if (lines.length !== 9) {
      throw new Error(`expected 9 lines, got ${lines.length}`);
    }
    for (let row = 0; row < 9; ++row) {
      let line = lines[row].trim();
      if (line.length !== 9) {
        throw new Error(`expected line of length 9, got ${line.length}`);
      }
      for (let col = 0; col < 9; ++col) {
        let char = line[col];
        if (char === '.') {
          continue;
        }
        if (char < '1' || char > '9') {
          throw new Error(`expected digit or '.', got ${char}`);
        }
        constraints.push({ row, col, value: char.codePointAt(0)! - '0'.codePointAt(0)! });
      }
    }
    return constraints;
  }

  async function solve(str: string) {
    let s = new Z3.Solver();
    let cells = Array.from(
      { length: 9 },
      (_, col) => Array.from(
        { length: 9 },
        (_, row) => Z3.Int(`c_${row}_${col}`),
      ),
    );
    for (let { row, col, value } of sudokuToConstraints(str)) {
      s.add(cells[row][col].eq(value));
    }
    addSudokuConstraints(s, cells);

    // console.log(s.help())

    let start = Date.now();
    console.log('start check');
    let check = await s.check();
    console.log(check, Date.now() - start);
    if (check === 'sat') {
      let model = s.model();
      let str = '';
      for (let row = 0; row < 9; ++row) {
        for (let col = 0; col < 9; ++col) {
          let val = model.evaluate(cells[row][col]);
          str += model.evaluate(cells[row][col]).as_string() + ' '
          if (col === 2 || col === 5) {
            str += ' ';
          }
        }
        str += '\n';
        if (row === 2 || row === 5) {
          str += '\n';
        }
      }
      console.log(str);
    }
    // console.log(s.str())
  }

  function addSudokuConstraints(s: InstanceType<typeof Z3.Solver>, cells: ReturnType<typeof Z3.Int>[][]) {
    for (let i = 0; i < 9; ++i) {
      for (let j = 0; j < 9; ++j) {
        if (i === 8 && j === 8) { 
          // break;
        }
        s.add(cells[j][i].le(9))
      }
    }
    for (let row of cells) {
      for (let cell of row) {
        s.add(cell.ge(1));
        // continue;
        // s.add(cell.le(9));
      }
    }

    for (let row of cells) {
      s.add(Z3.Distinct(...row));
    }

    for (let col = 0; col < 9; ++col) {
      s.add(Z3.Distinct(...cells.map(row => row[col])));
    }

    for (let suprow = 0; suprow < 3; ++suprow) {
      for (let supcol = 0; supcol < 3; ++supcol) {
        let square = [];
        for (let row = 0; row < 3; ++row) {
          for (let col = 0; col < 3; ++col) {
            square.push(cells[suprow * 3 + row][supcol * 3 + col]);
          }
        }
        s.add(Z3.Distinct(...square));
      }
    }
  }

  // let s = Z3.Solver();
  // let a = Z3.Int('a');
  // let b = Z3.Int('b');
  // s.add(Z3.Distinct(a, b));
  // return;

  await solve(`
....1..3.
..9..5..8
8.4..6.25
......6..
..8..4...
12..87...
3..9..2..
.65..8...
9........
  `);

  em.PThread.terminateAllThreads();
 
})().catch(e => {
  console.error('error', e);
  process.exit(1);
});
