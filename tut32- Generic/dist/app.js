"use strict";
// TYPESAFETY IS NOT THERE 
// -----------------------
// function fruits(name:any):any {
//     return name;
// }
// console.log(fruits("jitu"));
// console.log(fruits(100));
// console.log(fruits(true));
Object.defineProperty(exports, "__esModule", { value: true });
function fruits(name) {
    return name;
}
console.log(fruits("jitu"));
console.log(fruits(100));
console.log(fruits(true));
function users(users) {
    return users[0];
}
console.log(users(["a", "b", "c"])); // string | undefined -> "a"
console.log(users([1, 2, 3, 4])); // number | undefined -> 1
console.log(users([true, false, true])); // boolean | undefined -> true
console.log(users([])); // undefined
//# sourceMappingURL=app.js.map