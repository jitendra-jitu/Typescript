## In TypeScript, function parameters can be typed explicitly to ensure type safety and clarity. 


1. Basic Parameter Types

```
function greet(name: string, age: number): string {
  return `Hello, my name is ${name} and I am ${age} years old.`;
}
```


2. Optional Parameters


```
function logMessage(message: string, userId?: number): void {
  console.log(`Message: ${message}, User: ${userId ?? "Anonymous"}`);
}
```


3. Default Parameters

```
function multiply(a: number, b: number = 2): number {
  return a * b;
}
```



4. Rest Parameters


```
function sum(...numbers: number[]): number {
  return numbers.reduce((acc, val) => acc + val, 0);
}
```
...numbers: number[] → accepts multiple arguments as an array

5. Typed Objects as Parameters


```
type User = {
  id: number;
  name: string;
};


function printUser(user: User): void {
  console.log(`ID: ${user.id}, Name: ${user.name}`);
}

```

6. Function Parameter Types with Callbacks


```
function processInput(input: string, callback: (msg: string) => void): void {
  callback(`Processed: ${input}`);
}
```
callback must be a function that takes a string and returns void




7. Generics in Parameters

```
function identity<T>(value: T): T {
  return value;
}

const str = identity<string>("Hello");
const num = identity<number>(42);
```
T is a generic type, making the function reusable for any type