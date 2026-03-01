
# TypeScript Type Guards: `typeof`, `instanceof`, and Custom Type Guards

These notes summarize how to **narrow types** safely in TypeScript using:

- `typeof` (for *primitive* types)
- `instanceof` (for *class instances / objects created via constructors*)
- **Custom type guards** (user-defined predicates that return type narrowing information)

They also include examples, common pitfalls, and best practices—grounded in the sample code you shared.

---

## Why Type Guards?
When you work with **union types** (e.g., `string | number | boolean` or `Order | Product`), TypeScript often needs help to understand **which subtype** is present at runtime. Type guards are the patterns that let TypeScript **narrow** a union to a specific member inside a conditional block.

---

## 1) `typeof` — for primitives
`typeof` is a JavaScript operator that returns a string describing a value’s runtime type. TypeScript recognizes this pattern and uses it to narrow unions of **primitive types**:

```ts
let userData1: string | number | boolean = "jitu";
userData1 = true;

if (typeof userData1 === "boolean") {
  console.log("This is bool dataType");
} else if (typeof userData1 === "string") {
  console.log("This is string dataType");
} else {
  console.log("This is Number dataType");
}
```

### What `typeof` can check reliably
- `"string"`, `"number"`, `"boolean"`, `"bigint"`, `"symbol"`, `"undefined"`, and `"object"` (for `null` it returns `"object"`)
- Functions via `typeof value === "function"`

### Pitfalls
- `typeof null === "object"` (historical quirk). Be careful when treating `null`.
- `typeof` is **not** suitable for distinguishing structural object types or class instances (use `instanceof` or custom guards instead).

---

## 2) `instanceof` — for class instances
Use `instanceof` to test whether an object is an instance of a **specific constructor**.

```ts
class Product {}
const product = new Product();

class Order {}
const order = new Order();

function checkDetails(data: Order | Product) {
  if (data instanceof Product) {
    console.log("This is the instance of Product");
  } else {
    console.log("This is the instance of Order");
  }
}

checkDetails(product); // => "This is the instance of Product"
```

### Notes
- Works only when values are created via `new` and share the same prototype (i.e., same realm). If objects come from **different bundles/frames/realms**, `instanceof` can fail.
- For interfaces (`interface`), there’s no runtime artifact to check against—use **custom type guards**.

---

## 3) Custom Type Guards — user-defined predicates
Custom type guards are functions that return a boolean **and** tell TypeScript what type a value has on the `true` branch using the special return type syntax: `value is SomeType`.

### Example (based on your `userData` vs `userInfo`):
```ts
interface UserData {
  name: string;
  city: string;
}

interface UserInfo {
  id: string;
  email: string;
}

function isUserData(data: UserData | UserInfo): data is UserData {
  return (data as UserData).name !== undefined; // presence-based check
}

function checkUserInfo(data: UserData | UserInfo) {
  if (isUserData(data)) {
    console.log("this is a user data");
    // data is narrowed to UserData here
    console.log(data.city);
  } else {
    console.log("this is a user info");
    // data is narrowed to UserInfo here
    console.log(data.email);
  }
}

const userdata1: UserData | UserInfo = { name: "jitu", city: "vijayawada" };
const userdata2: UserData | UserInfo = { id: "101", email: "jitu@gmail.com" };

checkUserInfo(userdata1);
checkUserInfo(userdata2);
```

### Why prefer custom guards over repeated casts
- They **centralize** the logic for differentiating types.
- They provide **stronger type narrowing** than ad-hoc `as` casts.
- They are reusable and testable.

### Safer checks
Presence-based checks (`in` operator) are often safer:
```ts
function isUserData(data: UserData | UserInfo): data is UserData {
  return "name" in data && "city" in data;
}

function isUserInfo(data: UserData | UserInfo): data is UserInfo {
  return "id" in data && "email" in data;
}
```

This avoids pitfalls if a property could exist but be `undefined` or falsy.

---

## Additional Guarding Techniques

### 4) Discriminated Unions (recommended for multiple variants)
Add a literal `kind` (or `type`) field to each variant. TypeScript can then narrow by comparing that field.

```ts
interface UserData {
  kind: "UserData";
  name: string;
  city: string;
}

interface UserInfo {
  kind: "UserInfo";
  id: string;
  email: string;
}

type User = UserData | UserInfo;

function handleUser(u: User) {
  switch (u.kind) {
    case "UserData":
      console.log(u.city);
      break;
    case "UserInfo":
      console.log(u.email);
      break;
  }
}
```

### 5) Tagged Literals / Exhaustiveness Checking
Use `never` in a `switch` default to ensure all cases are handled at compile-time:
```ts
function exhaustive(u: User) {
  switch (u.kind) {
    case "UserData":
      // ...
      break;
    case "UserInfo":
      // ...
      break;
    default: {
      const _exhaustive: never = u; // compile error if a case is missing
      throw new Error("Unhandled variant");
    }
  }
}
```

---

## Common Pitfalls & How to Avoid Them

1. **Using `instanceof` for interfaces**: Interfaces don’t exist at runtime; `instanceof` won’t work. Use custom guards or discriminated unions.
2. **Loose property presence checks**: `data as Type` followed by `prop !== undefined` can pass even when wrong. Prefer the `in` operator or discriminants.
3. **Realm mismatches**: `instanceof` can fail across different iframes/windows. Consider checking a unique symbol/tag on the prototype instead.
4. **Nullable values**: Remember `typeof null === "object"`. Guard against `null` explicitly when narrowing `object` types.
5. **Excessive casting (`as`)**: Casting suppresses type errors. Favor **narrowing** via guards over force-casting.

---

## Best Practices
- Prefer **discriminated unions** for domain models with multiple variants.
- Encapsulate logic in **custom type guard functions** for reuse and clarity.
- Use `typeof` only for primitives; use `instanceof` for class instances; for structural types (interfaces), use custom guards.
- Write **exhaustive switches** and use `never` to catch missing cases at compile time.
- Keep guard functions **pure and predictable**—avoid side effects.

---

## Quick Reference Cheatsheet

```ts
// typeof — primitives
if (typeof value === "string") { /* narrowed to string */ }
if (typeof value === "number") { /* narrowed to number */ }
if (typeof value === "boolean") { /* narrowed to boolean */ }
if (typeof value === "function") { /* narrowed to Function */ }

// instanceof — class instances
if (obj instanceof SomeClass) { /* narrowed to SomeClass */ }

// Custom type guard
function isFoo(x: Foo | Bar): x is Foo {
  return "fooProp" in x;
}

if (isFoo(x)) { /* x is Foo here */ } else { /* x is Bar here */ }
```

---

## Applying to Your Snippet
- Your `typeof` usage correctly narrows `string | number | boolean`.
- Your `instanceof` usage correctly distinguishes `Product` vs `Order` class instances.
- For `userData | userInfo`, convert your ad-hoc cast check to a named custom guard using the `in` operator. This improves safety and readability:

```ts
function isUserData(data: userData | userInfo): data is userData {
  return "name" in data && "city" in data;
}

function checkUserInfo(data: userData | userInfo) {
  if (isUserData(data)) {
    console.log("this is a user data");
  } else {
    console.log("this is a user info");
  }
}
```

---

### Final Tip
When you find yourself writing `as Type`, ask: *Can I express a proper guard instead?* If yes, write a custom type guard or use discriminated unions to keep your code type-safe and readable.

