- generate TS bindings
  - anything which takes or returns a string parameter, wrap it
    - https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#call-compiled-c-c-code-directly-from-javascript
  - opt = nullable, also needs a wrapper
  - ignore functions with out parameters for now
  - functions too:
    https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-javascript-functions-as-function-pointers-from-c
  - enums -> TS enums https://www.typescriptlang.org/docs/handbook/enums.html
  - phantom types for pointers https://github.com/microsoft/TypeScript/issues/202#issuecomment-829256943
