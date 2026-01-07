// -----------------------------
// Interfaces
// -----------------------------
interface A { name: string; }
interface B { email: string; }

// ✅ Multiple inheritance with interfaces
interface C extends A, B {
  age: number;
}

let student: C = {
  name: "jitu",
  email: "jity@gmail.com",
  age: 22
};
console.log("Interface C:", student);

// ❌ Interfaces cannot extend a union type
// interface D extends A | B {} // ERROR

// ❌ Interfaces cannot represent primitive types directly
// interface Primitive extends string {} // ERROR


// -----------------------------
// Types
// -----------------------------
type One = { name: string };
type Two = { email: string };

// ✅ Intersection with types
type Three = One & Two;
let studentName: Three = {
  name: "jitu",
  email: "jity@gmail.com"
};
console.log("Type Three:", studentName);


// ✅ Union with types
type Four = One | Two;
let empName: Four = { name: "jitu" }; // valid, only needs to satisfy One OR Two
console.log("Type Four:", empName);



// ✅ Types can alias primitives
type MyString = string;
let str: MyString = "Hello TypeScript";
console.log("Primitive alias:", str);

// ✅ Types can represent complex unions/intersections
type Status = "success" | "error" | "loading";
let currentStatus: Status = "success";
console.log("Union literal type:", currentStatus);

// ✅ Types can use conditional types (advanced feature)
type IsString<T> = T extends string ? "yes" : "no";
type Test1 = IsString<string>;  // "yes"
type Test2 = IsString<number>;  // "no"
