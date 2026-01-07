// 1️⃣ Plain JavaScript array (no type safety)
var users1 = ["jitu", "pandu", "amul"];
users1.push("immu"); // can push any type (string, number, object, etc.)
console.log(users1);



// 2️⃣ TypeScript typed array (string only)
var users2: string[] = ["jitu", "pandu", "amul"];
users2.push("immu"); // ✅ allowed (string)
// users2.push(11);   // ❌ error: number not assignable to string[]
console.log(users2);



// 3️⃣ Union type array (string OR number)
var users3: (string | number)[] = ["jitu", "pandu", "amul"];
users3.push(11); // ✅ allowed (number)
users3.push("immu"); // ✅ allowed (string)
console.log(users3);



// 4️⃣ Any type array (no restrictions)
var users4: any = ["jitu", "pandu", "amul"];
users4.push(11); // number
users4.push(Symbol("11")); // symbol
users4.push({ id: 99 }); // object
console.log(users4);



// 5️⃣ Generic Array<any> (same as any[])
let users5: Array<any> = ["jitu", "pandu", "amul"];
users5.push(11); // number
users5.push({ id: 11 }); // object
users5.push(Symbol("11")); // symbol
console.log(users5);



// 6️⃣ Tuple (fixed length & types)
let users6: [string, number, boolean] = ["jitu", 11, true];
// users6.push("extra"); // ❌ error: tuple has fixed length
console.log(users6);



// 7️⃣ Readonly array (immutable)
// A ReadonlyArray<T> in TypeScript is an array that cannot be modified.
// You can read values, iterate, and access elements, but you cannot push, pop, splice, or reassign items
const users7: ReadonlyArray<string> = ["jitu", "pandu", "amul"];
// users7.push("immu"); // ❌ error: cannot modify readonly array
console.log(users7);



// 8️⃣ Array of custom type (objects)
type User = { id: number; name: string };
let users8: User[] = [
  { id: 1, name: "jitu" },
  { id: 2, name: "pandu" }
];
users8.push({ id: 3, name: "amul" });
console.log(users8);
