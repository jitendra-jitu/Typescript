# 1️⃣ Plain JavaScript array (no type safety)
1.  In plain JS, arrays can hold any type of value.
2.  No type safety → compiler won't warn if you mix types.

```
var users1 = ["jitu", "pandu", "amul"];
users1.push("immu"); // can push any type (string, number, object, etc.)
users1.push(123);    // allowed, even though it's a number
console.log(users1);

```



# 2️⃣ TypeScript typed array (string only)

1. Restricts elements to strings only.
2. Compiler error if you try to push another type.

```
var users2: string[] = ["jitu", "pandu", "amul"];
users2.push("immu"); // ✅ allowed (string)
// users2.push(11);   // ❌ error: number not assignable to string[]
console.log(users2);

```



3️⃣ Union type array (string OR number)

1. Allows multiple specific types.
2. Example: strings and numbers together.


```
var users3: (string | number)[] = ["jitu", "pandu", "amul"];
users3.push(11);     // ✅ allowed (number)
users3.push("immu"); // ✅ allowed (string)
console.log(users3);
```



# 4️⃣ Any type array (no restrictions)

1. No restrictions at all.
2. Accepts any type (unsafe, loses type safety).

```
var users4: any[] = ["jitu", "pandu", "amul"];
users4.push(11);             // number
users4.push(Symbol("11"));   // symbol
users4.push({ id: 99 });     // object
console.log(users4);
```



# 5️⃣ Generic Array<any> (same as any[])

1. Uses generic syntax: Array<T>.
2. Same as any[], but written differently.

```
let users5: Array<any> = ["jitu", "pandu", "amul"];
users5.push(11);             // number
users5.push({ id: 11 });     // object
users5.push(Symbol("11"));   // symbol
console.log(users5);
```



# 6️⃣ Tuple (fixed length & types)

1. A tuple is an array with fixed length and types per index.
2. Each position has a defined type.

```
let users6: [string, number, boolean] = ["jitu", 11, true];
// users6.push("extra"); // ❌ error: tuple has fixed length
console.log(users6);
```



# 7️⃣ Readonly array (immutable)
1. A ReadonlyArray<T> cannot be modified.
2. You can read values, iterate, and access elements,
3. but you cannot push, pop, splice, or reassign items.

```
const users7: ReadonlyArray<string> = ["jitu", "pandu", "amul"];
// users7.push("immu"); // ❌ error: cannot modify readonly array
console.log(users7);
```



# 8️⃣ Array of custom type (objects)
1. Strongly typed objects inside an array.
2. Useful for collections of structured data.

```
type User = { id: number; name: string };
let users8: User[] = [
  { id: 1, name: "jitu" },
  { id: 2, name: "pandu" }
];
users8.push({ id: 3, name: "amul" }); // ✅ allowed
console.log(users8);
```
