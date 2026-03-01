
# Generics in TypeScript

Generics allow you to create **reusable, type-safe components** that work with a variety of types instead of a single one. They provide flexibility while maintaining strong typing.

---

## Why Generics?
- **Reusability:** Write one function, interface, or class that works for multiple types.
- **Type Safety:** The compiler enforces correct usage based on the type you plug in.
- **Clarity:** Avoid `any` and keep type information intact.

Without generics, you might write multiple versions of the same logic for different types. Generics solve this by introducing **type parameters**.

---

## Syntax
A generic uses **type parameters** inside angle brackets `< >`:

```ts
function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(42); // T = number
const str = identity<string>("Hello"); // T = string
```

Here:
- `T` is a **type parameter** (placeholder for a type).
- When calling `identity<number>(42)`, `T` becomes `number`.

Type inference often lets you omit `<number>`:
```ts
identity(42); // inferred as number
```

---

## Generic Interfaces
```ts
interface Resource<T> {
  id: number;
  resourceName: string;
  data: T;
}

const person: Resource<{ name: string; age: number }> = {
  id: 1,
  resourceName: "Person",
  data: { name: "John", age: 25 }
};

const employee: Resource<string[]> = {
  id: 2,
  resourceName: "Employee",
  data: ["Employee 1", "Employee 2"]
};
```

### Why `T`?
`T` is a placeholder for the type of `data`. When you write `Resource<string[]>`, `data` must be a `string[]`. When you write `Resource<object>`, `data` must be an object.

---

## Generic Functions
```ts
function wrapInArray<T>(value: T): T[] {
  return [value];
}

const numArray = wrapInArray(5); // inferred as number[]
const strArray = wrapInArray("Hello"); // inferred as string[]
```

---

## Generic Classes
```ts
class Box<T> {
  contents: T;
  constructor(value: T) {
    this.contents = value;
  }
}

const numberBox = new Box<number>(123);
const stringBox = new Box("Hello"); // inferred as string
```

---

## Constraints
You can **constrain** `T` to ensure it meets certain requirements:
```ts
interface HasName {
  name: string;
}

function printName<T extends HasName>(obj: T) {
  console.log(obj.name);
}

printName({ name: "Alice", age: 30 }); // OK
printName({ age: 30 }); // Error: Property 'name' is missing
```

### Multiple Constraints
```ts
function combine<T extends object, U extends object>(a: T, b: U) {
  return { ...a, ...b };
}
```

---

## Default Type Parameters
Provide defaults if callers don’t specify:
```ts
interface Response<T = any> {
  data: T;
}

const res: Response = { data: "Hello" }; // T defaults to any
```

---

## Keyof with Generics
```ts
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

const person = { name: "John", age: 25 };
const name = getProperty(person, "name"); // type is string
```

---

## Best Practices
- **Use descriptive type parameter names**: `T`, `U`, `V` for short-lived, or `ItemType` for clarity.
- **Avoid `any`**: Generics keep type info intact.
- **Constrain when possible**: Prevent misuse by adding `extends`.
- **Leverage inference**: Often you don’t need to explicitly specify `<T>`.
- **Combine with utility types**: `Partial<T>`, `Readonly<T>`, etc.

---

## Quick Cheatsheet
```ts
// Generic function
function identity<T>(arg: T): T { return arg; }

// Generic interface
interface Box<T> { value: T; }

// Generic class
class Container<T> { constructor(public item: T) {} }

// Constraint
function logLength<T extends { length: number }>(x: T) { console.log(x.length); }

// Default type
interface ApiResponse<T = unknown> { data: T; }
```

---

Generics are a cornerstone of TypeScript’s type system. They make your code **flexible, reusable, and type-safe**.
