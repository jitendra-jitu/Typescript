"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let personData = {
    name: "jitu",
    age: 21,
    isEmp: true
};
let personDataX;
// let personDataX:keyof PersonT;  //Also Allowed
personDataX = "name";
personDataX = "age";
personDataX = "isEmp";
// personDataX="country";   //Not Allowed
console.log(typeof personData);
let userX = "name";
console.log(userX);
const SETTINGS = {
    theme: "dark",
    lang: "en",
};
// "dark" | "en"
//# sourceMappingURL=app.js.map