# TypeScript Notes

## Enum Data Type

Enums allow you to define a set of named constants. They make code more readable and maintainable by giving meaningful names to numeric or string values.

### Numeric Enums
By default, enums are numeric, starting at `0` and incrementing by `1`.

```ts
enum Direction {
  Up,      // 0
  Down,    // 1
  Left,    // 2
  Right    // 3
}

```

let move: Direction = Direction.Up;
console.log(move); // 0
You can also set custom starting values:

```
enum Status {
  Success = 1,
  Failure = 5,
  Pending = 10
}
```

console.log(Status.Failure); // 5


## String Enums


Enums can also use string values.

```
enum Colors {
  Red = "RED",
  Green = "GREEN",
  Blue = "BLUE"
}
```

let favorite: Colors = Colors.Green;
console.log(favorite); // "GREEN"


## Heterogeneous Enums
Rarely used, but enums can mix string and numeric values.

```
enum Mixed {
  No = 0,
  Yes = "YES"
}
```

## Reverse Mapping

Numeric enums support reverse mapping (getting the name from the value).

```
enum Role {
  User = 1,
  Admin,
  SuperAdmin
}
```

console.log(Role.Admin); // 2
console.log(Role[2]);    // "Admin"


## Const Enums
For performance, you can use const enum to inline values at compile time.

```
const enum LogLevel {
  Info,
  Warning,
  Error
}
```

let level: LogLevel = LogLevel.Error;
console.log(level); // 2


## Key Points
- Enums group related constants under a single name.
- Numeric enums auto-increment unless specified.
- String enums provide clearer intent but no reverse mapping.
- Const enums improve performance by removing runtime overhead