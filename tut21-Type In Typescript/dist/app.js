"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let student = {
    name: "jitu",
    email: "jity@gmail.com",
    age: 22
};
console.log("Interface C:", student);
let studentName = {
    name: "jitu",
    email: "jity@gmail.com"
};
console.log("Type Three:", studentName);
let empName = { name: "jitu" }; // valid, only needs to satisfy One OR Two
console.log("Type Four:", empName);
let str = "Hello TypeScript";
console.log("Primitive alias:", str);
let currentStatus = "success";
console.log("Union literal type:", currentStatus);
//# sourceMappingURL=app.js.map