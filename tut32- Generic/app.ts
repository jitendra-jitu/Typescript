// TYPESAFETY IS NOT THERE 
// -----------------------
// function fruits(name:any):any {
//     return name;
// }
// console.log(fruits("jitu"));
// console.log(fruits(100));
// console.log(fruits(true));





function fruits<T>(name:T):T {
    return name;
}
console.log(fruits("jitu"));
console.log(fruits(100));
console.log(fruits(true));



function users<T>(users: T[]): T | undefined {
  return users[0];
}

console.log(users(["a", "b", "c"]));      // string | undefined -> "a"
console.log(users([1, 2, 3, 4]));         // number | undefined -> 1
console.log(users([true, false, true]));  // boolean | undefined -> true
console.log(users([]));                   // undefined




