// =======================
// 1. Primitive Types
// =======================
let age: number = 25;
let name1: string = "John";
let isActive: boolean = true;
let big: bigint = 9007199254740991n;
let sym: symbol = Symbol("id");
let data: null = null;              // primitive
let x: undefined = undefined;       // primitive

// =======================
// 2. Special Types (extra helpers)
// =======================
let value: any = "Hello";           // disables type checking
let input: unknown = 5;             // safer than 'any'

function error(): never {
  throw new Error("Error");
}

function log(): void {
  console.log("Hi");
}

// =======================
// 3. Object Types
// =======================

// object
let obj: object = { key: "value" };

// Array
let nums: number[] = [1, 2, 3];
let names: Array<string> = ["Alice", "Bob"];

// Tuple
let person: [string, number] = ["John", 25];

// Enum
enum Color { Red, Green, Blue }
let c: Color = Color.Green;

// Class
class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
let p = new Person("John");

// Interface
interface User {
  name: string;
  age: number;
}
let user: User = { name: "Alice", age: 30 };

// Function type
let add: (x: number, y: number) => number = (x, y) => x + y;

// =======================
// 4. Advanced / Utility Types
// =======================

// Union
let id: number | string = 101;

// Intersection
type Manager = { department: string };
type Employee = Person & Manager;
let emp: Employee = { name: "Bob", department: "HR" };

// Literal
let direction: "up" | "down" = "up";

// Type Alias
type ID = number | string;
let empId: ID = "E123";

// Generics
function identity<T>(value: T): T {
  return value;
}
let output1 = identity<string>("Hello");
let output2 = identity<number>(42);
