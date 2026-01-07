# Data types in TypeScript

1. In TypeScript, data types define the kind of values a variable can hold, ensuring type safety and better code clarity.  
2. They are broadly classified into Primitive Types, Special Types, Object Types, and Advanced Types.

---

## 1. Primitive Types
These are the most basic types.

| Type   | Example                               | Description |
|--------|---------------------------------------|-------------|
| number | let age: number = 25;                 | Represents integers and floating-point numbers. |
| string | let name: string = "John";            | Represents text values. |
| boolean| let isActive: boolean = true;         | Represents true or false. |
| bigint | let big: bigint = 9007199254740991n;  | For very large integers. |
| symbol | let sym: symbol = Symbol("id");       | Unique and immutable identifiers. |

---

## 2. Special Types
These handle special cases.

| Type      | Example                                             | Description |
|-----------|-----------------------------------------------------|-------------|
| null      | let data: null = null;                              | Represents an intentional absence of value. |
| undefined | let x: undefined = undefined;                       | Represents an uninitialized variable. |
| any       | let value: any = "Hello";                          | Disables type checking (use cautiously). |
| unknown   | let input: unknown = 5;                             | Similar to any but safer — requires type checking before use. |
| never     | function error(): never { throw new Error("Error"); } | Represents values that never occur (e.g., functions that throw errors or never return). |
| void      | function log(): void { console.log("Hi"); }        | Represents no return value from a function. |

---

## 3. Object Types
These represent collections or complex structures.

| Type      | Example                                | Description |
|-----------|----------------------------------------|-------------|
| object    | let obj: object = { key: "value" };    | Non-primitive values. |
| Array     | let nums: number[] = [1, 2, 3];        | List of elements of the same type. |
| Tuple     | let person: [string, number] = ["John", 25]; | Fixed-length array with specific types. |
| enum      | enum Color { Red, Green, Blue }        | Named constants. |
| class     | class Person { name: string; }         | Blueprint for creating objects. |
| interface | interface User { name: string; age: number; } | Defines object shape. |
| function  | (x: number, y: number) => number       | Function type definition. |

---

## 4. Advanced / Utility Types
These are built-in helpers for type manipulation.

- **Union Types:** `let id: number | string;`
- **Intersection Types:** `type Employee = Person & Manager;`
- **Literal Types:** `let direction: "up" | "down";`
- **Type Aliases:** `type ID = number | string;`
- **Generics:** `function identity<T>(value: T): T { return value; }`

---

✅ **Tip:** TypeScript uses type inference, so you don’t always need to explicitly declare types unless necessary.
