# TypeScript Type Mismatch Bug

This repository demonstrates a common type error in TypeScript involving function arguments. The `add` function is defined to accept two numbers, but the code attempts to call it with a string as the second argument. This results in a compilation error because TypeScript's type system prevents the function from being called with incompatible types.

The solution involves ensuring that the arguments passed to the function match the types declared in the function signature. This can be done either by explicitly converting the string to a number or by refining the function signature to accept either numbers or strings and handling the conversion accordingly.  The solution file shows one way to rectify this.

## How to Reproduce

1. Clone the repository.
2. Compile the TypeScript code using the TypeScript compiler (tsc). You will encounter a compilation error highlighting the type mismatch.
3. Observe the error message and its location within the code.