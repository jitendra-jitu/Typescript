# What is object in TS?

1. object is a non-primitive type in TypeScript.
2. It represents any value that is not a primitive (string, number, boolean, symbol, null, or undefined).
3. Useful when you want to accept any structured value (arrays, functions, objects).



```
let obj: object;
obj = { name: "Alice" };   // ✅ allowed
obj = [1, 2, 3];           // ✅ allowed
obj = () => console.log(); // ✅ allowed
obj = 42;                  // ❌ error (primitive)
```

```
Type	        Meaning
----------------------------------------------------------------
object	        Any non-primitive value (arrays, functions, objects).
{}	            The most general type — allows any value (including primitives).
Object	        Refers to the JavaScript Object type — includes methods like toString.

```