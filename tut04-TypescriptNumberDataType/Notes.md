## TypeScript Compilation



```
let num2: number = 20; → valid in .ts.

Compiles to let num2 = 20; in .js.

Error occurs if .ts and .js both exist in same folder and runtime loads both.

✅ Fix: configure tsconfig.json with outDir (e.g., dist/) so compiled JS is separate from source TS.

```



## Syntax 
```
var <var-Name>:<var-DataType> = value 
```


## Type inference

1. Type inference in TypeScript is the process where the compiler automatically determines the type of a variable, parameter, or return value without explicit type annotations.
2. This helps reduce verbosity while still maintaining type safety.

