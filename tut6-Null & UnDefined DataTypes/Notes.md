# Null vs Undefined in TypeScript

In TypeScript, both `null` and `undefined` represent "no value," but they differ in meaning and usage.

## 🔑 Key Differences

| Aspect              | `null`                                   | `undefined`                              |
|---------------------|------------------------------------------|------------------------------------------|
| Meaning             | Explicit absence of value (set intentionally). | Value not assigned (default state).      |
| TypeScript type     | `null`                                   | `undefined`                              |
| Default behavior    | Must be assigned manually.                | Variables declared but not initialized are `undefined`. |
| Common use case     | Used to signal “no value” or “empty.”     | Used to indicate “not yet assigned” or “missing.” |
| Comparison          | `null == undefined` → `true`             | `null === undefined` → `false`           |

## 📖 Examples

```ts
let a: string | null = null;        // explicitly no value
let b: string | undefined;          // declared but not initialized → undefined

console.log(a); // null
console.log(b); // undefined

// Equality checks
console.log(null == undefined);  // true (loose equality)
console.log(null === undefined); // false (strict equality)
```



## Strict null checks (--strictNullChecks) 

1. When enabled, null and undefined are distinct types and must be handled explicitly.

```
let x: string = null;        // ❌ Error with strictNullChecks
let y: string | null = null;// ✅ Allowed
``` 



## Optional properties 

2. Marked with ?, they are typed as possibly undefined, not null.


```ts

interface User {
  name: string;
  age?: number; // age 