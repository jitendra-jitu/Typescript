# TypeScript Notes: Strings & Booleans

## Strings
Definition:  
- Strings represent textual data in TypeScript.  
- Declared using the `string` type.  

Examples:
```ts
var str1: string = "Hello";
var str2: string = "World";

var age: number = 22;
var UserName: string = "Gudela Jitendra";

var sentence: string = `My name is ${UserName}, and Age is ${age}`;
console.log(sentence);

var num: number = 11;
var numStr = "" + num;          // Implicit conversion
var numStr = num.toString();    // Explicit conversion
console.log(numStr);

```


```ts



var bool1: boolean = true;
var boolStr = "" + bool1; 
console.log("boolStr:" + boolStr + "\ntypeof boolStr:" + typeof boolStr);

// var bool2: boolean = 123; // ❌ Not Allowed

var other: boolean = false;
// other = boolStr; // ❌ Not Allowed


```

