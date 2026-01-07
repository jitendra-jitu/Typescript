# Notes: any vs unknown in TypeScript

## 1. any
- Accepts any value
- No type safety (unsafe)
- Properties/methods can be accessed directly
- Useful for quick prototyping or legacy JS migration

```
let a: any = 42;
a = "hello";        // ✅ allowed
a.foo();            // ✅ allowed, but may crash at runtime
```


## 2. unknown
- Accepts any value
- Type safe (must check/assert before use)
- Cannot access properties/methods directly
- Safer alternative to any for dynamic data


```
let b: unknown = 42;
b = "hello";        // ✅ allowed

// ❌ Error: direct property access not allowed
// b.toUpperCase();

// ✅ Must narrow first
if (typeof b === "string") {
  console.log(b.toUpperCase());
}

// ✅ Or use type assertion
let str: string = b as string;

```


## Comparison 


| Feature            | any                          | unknown                        |
|--------------------|------------------------------|--------------------------------|
| Accepts any value  | ✅ Yes                       | ✅ Yes                         |
| Type safety        | ❌ No (unsafe)               | ✅ Yes (must check/assert)     |
| Property access    | ✅ Allowed directly          | ❌ Not allowed without checks  |
| Assignable to      | ✅ Any type                  | ❌ Only `any` or `unknown`     |
| Use case           | Quick prototyping, legacy JS | Safer handling of dynamic data |
