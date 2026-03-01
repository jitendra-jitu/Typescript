
# TypeScript Utility Types — Quick Notes

This note summarizes several built‑in TypeScript utility types using your examples:

- `Omit<T, K>`
- `Exclude<T, U>`
- `Extract<T, U>`
- `NonNullable<T>`
- `Record<K, T>`

---

## 1) `Omit<T, K>`
**Purpose:** Build a new type from `T` by removing keys `K`.

**Signature:**
```ts
Omit<T, K>
```
Where `K` is a union of property names (keys) in `T`.

**Your interface:**
```ts
interface student {
  name: string;
  location: string;
  noOfStudents: number;
  noOfBraches: number;
}
```

**Examples:**
```ts
// Remove two fields
let student1: Omit<student, 'noOfBraches' | 'noOfStudents'> = {
  name: 'jitu',
  location: 'Nellore',
};

// Remove one field (must keep the others)
let student2: Omit<student, 'noOfBraches'> = {
  name: 'jitu',
  location: 'Nellore',
  noOfStudents: 0,
};
```
✅ `student1` and `student2` are correct: you’ve omitted only the keys specified, and provided the rest required by the interface.

**Common pitfalls:**
- `K` must be keys of `T`. If you pass a key not in `T`, TypeScript errors.
- `Omit` doesn’t change runtime—only compile-time types.

---

## 2) `Exclude<T, U>`
**Purpose:** From union `T`, remove any members assignable to `U`.

**Signature:**
```ts
Exclude<T, U>
```

**Example union:**
```ts
type APIStatus = 'Pending' | 'error' | 'loading' | 'success';
```

**Examples:**
```ts
let apiCallWithExclude: Exclude<APIStatus, 'error'> = 'Pending';
// Type is 'Pending' | 'loading' | 'success'; assigning 'Pending' is valid.
```

**Notes:**
- `Exclude<'a' | 'b', 'b'>` → `'a'`
- Useful for removing invalid/unsupported cases when you know you won’t handle them.

---

## 3) `Extract<T, U>`
**Purpose:** From union `T`, keep only members that are assignable to `U`.

**Signature:**
```ts
Extract<T, U>
```

**Examples:**
```ts
let apiCallWithExtract: Extract<APIStatus, 'error' | 'Pending'> = 'error';
// Type becomes 'error' | 'Pending'; assigning 'error' is valid.
```

**`Exclude` vs `Extract` mental model:**
- `Exclude` = T **minus** U
- `Extract` = T **intersect** U

**Tip:** Use control flow to narrow variables without redeclaration:
```ts
let status: APIStatus = 'loading';
if (status === 'error' || status === 'Pending') {
  // status is Extract<APIStatus, 'error' | 'Pending'> here
} else {
  // status is Exclude<APIStatus, 'error' | 'Pending'> → 'loading' | 'success'
}
```

---

## 4) `NonNullable<T>`
**Purpose:** Remove `null` and `undefined` from `T`.

**Signature:**
```ts
NonNullable<T>
```

**Example union:**
```ts
type RandomType = string | number | null | string[];
let random: NonNullable<RandomType> = 20; // OK → type is string | number | string[]
```

**Use cases:**
- Ensuring a value has been checked or initialized before use.
- Useful in function return types or after optional chaining.

**Pitfall:** If you try to assign `null` or `undefined` to a `NonNullable<T>`, TypeScript will error.

---

## 5) `Record<K, T>`
**Purpose:** Create an object type with keys `K` and value type `T`.

**Signature:**
```ts
Record<K extends keyof any, T>
```

**Examples:**
```ts
type role = 'admin' | 'user' | 'guest';
let roleName: Record<role, string> = {
  user: 'jitu',
  admin: 'jitu',
  guest: 'None',
};
```
✅ All keys from `role` must be present exactly once; values are `string`.

**Variants & Tips:**
- Combine with `Partial` to make values optional: `Record<role, string | undefined>` or `Partial<Record<role, string>>`.
- For numeric enums or string literals, `Record` enforces exhaustive mappings.

---

## Bonus: Related utilities (for context)
- `Partial<T>` — make all properties optional.
- `Required<T>` — make all properties required.
- `Pick<T, K>` — select only the listed keys from `T`.
- `Readonly<T>` — make properties immutable.

---

## Patterns & Best Practices
1. **Don’t redeclare variables to narrow types.** Use control-flow type narrowing (if/switch) or helper functions.
2. **Prefer discriminated unions** for complex status handling:
   ```ts
   type Status =
     | { kind: 'Pending' }
     | { kind: 'loading' }
     | { kind: 'success'; data: unknown }
     | { kind: 'error'; message: string };
   ```
3. **Leverage `Record` for exhaustive maps** and `as const` for literal preservation:
   ```ts
   const ROLES = ['admin', 'user', 'guest'] as const;
   type Role = typeof ROLES[number];
   const labels: Record<Role, string> = { admin: 'A', user: 'U', guest: 'G' };
   ```

---

## Quick Cheatsheet
- **Omit<T, K>**: remove keys → object shapes
- **Exclude<T, U>**: minus on unions → union cleanup
- **Extract<T, U>**: intersection on unions → union filtering
- **NonNullable<T>**: eliminate null/undefined → safety
- **Record<K, T>**: key/value object type → exhaustive mapping

---

*All examples compile in TypeScript ≥ 3.5 (utility types are built‑in).*
