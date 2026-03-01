
# TypeScript Index Signatures — Essentials

---

## ✅ What is an Index Signature?
Allows defining types for properties when keys are unknown.

```ts
type Dictionary = {
  [key: string]: number;
};

const scores: Dictionary = { alice: 10, bob: 20 };
```

---

## ✅ Syntax
```ts
type MyType = {
  [index: string]: ValueType;
};
```
Examples:
```ts
type StringMap = { [key: string]: string };
type NumArray = { [index: number]: number }; // Array-like
```

---

## ✅ Readonly Index Signature
```ts
type ReadonlyDict = {
  readonly [key: string]: number;
};
```

---

## ✅ Keyof and Index Access
```ts
type Dict = { [key: string]: number };
type Keys = keyof Dict;    // string | number
type Values = Dict[Keys];  // number
```

---

## ✅ Common Pattern: Dictionary
```ts
type User = { id: number; name: string };
type UserMap = { [id: string]: User };
// Or use Record:
type UserMap = Record<string, User>;
```

---

## ✅ Gotchas
- `keyof any` = `string | number | symbol`
- Named properties must match index signature type.
- Prefer `Record<K,V>` for convenience.

---

### TL;DR
- Use `{ [key: string]: Type }` for dynamic keys.
- Add `readonly` for immutability.
- Use `Record<K,V>` for cleaner syntax.
