# object vs {} vs Object in TypeScript

1. object
---------
Represents non‑primitive values only.
Excludes string, number, boolean, symbol, null, and undefined.
Accepts arrays, functions, and objects.

```
let a: object;
a = { x: 1 };     // ✅
a = [1, 2, 3];    // ✅
a = () => {};     // ✅
a = 42;           // ❌ Error (primitive)
```

2. {}
--------
The most permissive type in TypeScript.
Accepts any value, including primitives.
Often used as a “catch‑all” type, but not recommended for strict typing.


```
let b: {};
b = 42;           // ✅
b = "hello";      // ✅
b = { x: 1 };     // ✅
⚠️ Risk: {} doesn’t enforce structure, so it’s basically “anything goes.”
```



3. Object
-----------
Refers to the JavaScript global Object type.

Includes prototype methods like toString, hasOwnProperty.

Allows wrapper objects like new String("a") or new Number(1).

```
let c: Object;
c = { x: 1 };             // ✅
c = new String("hello");  // ✅
c = 42;                   // ❌ Error (primitive literal)

```


# Comparison Table

| Type   | Accepts Primitives?                 | Accepts Objects? | Notes                          |
|--------|-------------------------------------|------------------|--------------------------------|
| object | ❌ No                                | ✅ Yes           | Non‑primitive only             |
| {}     | ✅ Yes                               | ✅ Yes           | Accepts literally anything     |
| Object | ❌ No (but wrapper objects allowed) | ✅ Yes           | Refers to JS Object type       |


