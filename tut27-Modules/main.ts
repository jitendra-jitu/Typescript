// main.ts
import type { StudentType } from "./dist/root.js";
import { Student, Teacher } from "./dist/app.js";

const student: StudentType = {
  name: "Alice",
  age: 20,
  email: "alice@example.com",
  password: 1234,
};

class user extends Student{

}

let s1 = new user();
console.log(s1.result(100));
console.log(s1.login("jitu", "1234"));

