# Typescript 

1. TypeScript is a superset of JavaScript that adds extra features like static typing, interfaces, enums, and more.
2. Essentially, TypeScript is JavaScript with additional syntax for defining types, making it a powerful tool for building scalable and maintainable applications.


## Installation

```
npm install typescript --save-dev
```

```
npm install -g typescript
```

## compiling & Running the Typescript file 

```
PS C:\Users\2464352\OneDrive - Cognizant\Documents\Typescript\tut2-Installation> npx tsc app.ts
PS C:\Users\2464352\OneDrive - Cognizant\Documents\Typescript\tut2-Installation> node app.js
Cognizant...

```

1. npx tsc app.ts
This converts app.ts → app.js.
The compiler checks types and syntax before producing JavaScript

2. node app.js
Node executes the generated JavaScript file.



## Type 'number' is not assignable to type 'string'.

```
var str :string="Cognizant..."
console.log(str)

str=12; /// not allowed

```


## npx tsc app.ts --watch

1. Compile once initially → produces app.js.
2. Stay running in watch mode → whenever you save changes to app.ts, it automatically recompiles into app.js.
3. You don’t need to re-run npx tsc manually each time.



## var name = "jitu" ❌ Not allowed 

1. In TypeScript (and modern JavaScript), the compiler enforces stricter rules about variable declarations.

2. The error “Cannot redeclare block-scoped variable 'name'” usually occurs because:

--> You already have a variable called name in the same scope.
For example, if you declared let name = "something" earlier, you can’t declare var name = "jitu" again in the same block.

--> ********* In browser environments, name is a global property of window.
TypeScript sees that window.name already exists, so redeclaring var name conflicts with that built-in definition.

--> Mixing var, let, or const redeclarations.
var allows redeclaration in plain JavaScript, but TypeScript blocks it when it collides with block-scoped declarations or global definitions.