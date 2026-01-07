# Union Types in TypeScript

## 📌 What are Union Types?
Union types allow a value to be one of several types.  
You use the `|` (pipe) symbol to combine multiple types.

---

## 🔹 Basic Example
```
let value: string | number;

value = "Hello"; // ✅ valid
value = 42;      // ✅ valid
value = true;    // ❌ Error: boolean not allowed
```


## Function Return Types
```
function getRandom(): string | number {
  return Math.random() > 0.5 ? "Hi" : 100;
}
```
## Function Parameters
```
function printId(id: string | number) {
  console.log("ID:", id);
}

printId("abc"); // ✅
printId(123);   // ✅
```
## Arrays with Union Types

```
let data: (string | number)[] = ["Alice", 25, "Bob", 30];
```

## Type Narrowing
- Use type guards to handle different union members safely.

```
function processValue(val: string | number) {
  if (typeof val === "string") {
    console.log(val.toUpperCase()); // string methods
  } else {
    console.log(val.toFixed(2));    // number methods
  }
}
```

## Union vs Any
- any: disables type checking (unsafe).
- union: restricts values to specific allowed types (safe).

```
let anything: any = "Hello"; // can be anything
let specific: string | number = "Hello"; // only string or number
```