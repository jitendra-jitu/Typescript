
# TypeScript `keyof` Operator — Notes

> Quick reference for how `keyof` works, common patterns, gotchas, and idioms.

---

## 1) What is `keyof`?
`keyof T` produces a union of **property names** (keys) of type `T`.

```ts
type Person = {
  name: string;
  age: number;
  active?: boolean; // optional still becomes a key
};

type PersonKeys = keyof Person; // "name" | "age" | "active"
```

- Works on object types, interfaces, and class instance types.
- For index signatures:

```ts
type Dict = { [k: string]: number };
// keyof Dict is string | number (number for array-like numeric keys)
```

> **Note**: `keyof` extracts **property names**, not values.

---

## 2) `keyof typeof`
Use `typeof` to get the type **from a value**, then `keyof` to extract its keys.

```ts
const SETTINGS = {
  theme: "dark",
  lang: "en",
} as const; // freeze values & make keys literal

type SettingKeys = keyof typeof SETTINGS; // "theme" | "lang"
```

- `as const` preserves literal keys **and** literal values.
- Without `as const`, values are widened (e.g., `string`), but `keyof` of the object’s **keys** is unchanged.

---
