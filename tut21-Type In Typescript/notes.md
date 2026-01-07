# TypeScript Notes

## Type Aliases (`type`)

- A **type alias** creates a new name for a type.
- Useful for unions, intersections, primitives, and complex object shapes.
- Syntax:
```
  type AliasName = ExistingType;
```

# Examples

1. Primitive Alias


```
type ID = number;
let userId: ID = 101;
```

2. Union Types
```
type Status = "success" | "error" | "loading";
let currentStatus: Status = "success";
```
3. Object Types

```
type User = {
  id: number;
  name: string;
  isAdmin?: boolean;
};
const u: User = { id: 1, name: "Alice" };
```
4. Function Types

```
type Callback = (value: string) => void;
const log: Callback = (msg) => console.log(msg);
```
5. Intersection Types

```
type Admin = { role: string };
type Employee = { id: number };
type AdminEmployee = Admin & Employee;

const ae: AdminEmployee = { role: "HR", id: 101 };
```
