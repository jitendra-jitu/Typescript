# Function Return Types in TypeScript

- TypeScript allows you to explicitly define what type a function should return.  
- This improves readability, safety, and consistency in your code.


1. Explicit return type
Function must return a number, otherwise TypeScript will throw an error.
```
function add(a: number, b: number): number {
  return a + b;
}
```

2. Inferred return type
TypeScript automatically infers the return type as string.
```
function greet(name: string) {
  return "Hello " + name; // inferred as string
}
```

3. Void return type
Function does not return anything, only performs an action.

```
function logMessage(msg: string): void {
  console.log(msg);
}
```

4. Never return type
Function never successfully returns (throws error or infinite loop).

```
function throwError(message: string): never {
  throw new Error(message);
}
```

5. Union return type
Function can return either a string or a number depending on condition.
```
function getValue(flag: boolean): string | number {
  return flag ? "Hello" : 42;
}
```

6. Function type alias
Defines a reusable function signature: takes two numbers, returns a number.
```
type MathOp = (x: number, y: number) => number;
const multiply: MathOp = (a, b) => a * b;
```

7. Async function return type
Async functions always return a Promise. Here, it resolves to a string.

```
async function fetchData(): Promise<string> {
  return "data loaded";
}
```
