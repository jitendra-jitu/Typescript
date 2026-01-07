#  What is an Interface?
- An interface defines a contract (shape) for objects or classes.
- It specifies properties and methods without implementation.
- Classes can implement interfaces to ensure they follow the required structure.

## Basic Example
```ts
// Define an interface
interface Person {
  name: string;
  age: number;
  greet(): void;
}

// Implement interface in a class
class Student implements Person {
  constructor(public name: string, public age: number) {}

  greet(): void {
    console.log(`Hello, I am ${this.name}, age ${this.age}.`);
  }
}

const s1 = new Student("Arun", 21);
s1.greet(); // Output: Hello, I am Arun, age 21.
```

## 📊 Key Points
- Use the implements keyword for a class to adopt an interface.
- A class must provide concrete implementations for all interface members.
- Interfaces can be extended (inherit from other interfaces).
- A class can implement multiple interfaces.

## 🧩 Multiple Interfaces Example
```ts
interface Logger {
  log(message: string): void;
}

interface Calculator {
  add(a: number, b: number): number;
}

class Utility implements Logger, Calculator {
  log(message: string): void {
    console.log("Log:", message);
  }

  add(a: number, b: number): number {
    return a + b;
  }
}

const util = new Utility();
util.log("Testing utility class");
console.log(util.add(5, 10)); // Output: 15
```