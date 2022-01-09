import { init } from './lib';

// solve a sudoku!
// most of the interesting stuff is in `solve`
// the process is:
// - parse the board
// - create a Solver
// - create a Z3.Int variable for each square
// - for known cells, add a constraint which says the variable for that cell equals that value
// - add the usual uniqueness constraints
// - call `await solver.check()`
// - if the result is "sat", the board is solvable
//   - call `solver.model()` to get a model, i.e. a concrete assignment of variables which satisfies the model
//   - for each variable, call `model.evaluate(v)` to recover its value

(async () => {
  let { em, Z3 } = await init();

  function sudokuToConstraints(str: string) {
    // derive a list of { row, col, val } records, one for each specified position
    // from a string like
    // ....1..3.
    // ..9..5..8
    // 8.4..6.25
    // ......6..
    // ..8..4...
    // 12..87...
    // 3..9..2..
    // .65..8...
    // 9........

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
        constraints.push({ row, col, value: char.codePointAt(0)! - 48 /* '0' */ });
      }
    }
    return constraints;
  }

  function addSudokuConstraints(s: InstanceType<typeof Z3.Solver>, cells: ReturnType<typeof Z3.Int>[][]) {
    // the usual constraints:

    // every square is between 1 and 9
    for (let row of cells) {
      for (let cell of row) {
        s.add(cell.ge(1));
        s.add(cell.le(9));
      }
    }

    // values in each row are unique
    for (let row of cells) {
      s.add(Z3.Distinct(...row));
    }

    // values in each column are unique
    for (let col = 0; col < 9; ++col) {
      s.add(Z3.Distinct(...cells.map(row => row[col])));
    }

    // values in each 3x3 subdivision are unique
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

  async function solve(str: string) {
    let s = new Z3.Solver();
    let cells = Array.from({ length: 9 }, (_, col) => Array.from({ length: 9 }, (_, row) => Z3.Int(`c_${row}_${col}`)));
    for (let { row, col, value } of sudokuToConstraints(str)) {
      s.add(cells[row][col].eq(value));
    }
    addSudokuConstraints(s, cells);

    let start = Date.now();
    console.log('starting...');
    let check = await s.check();
    console.log(`problem was determined to be ${check} in ${Date.now() - start} ms`);
    if (check === 'sat') {
      let model = s.model();
      let str = '';
      for (let row = 0; row < 9; ++row) {
        for (let col = 0; col < 9; ++col) {
          str += model.evaluate(cells[row][col]).as_string() + ' ';
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
  }

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
