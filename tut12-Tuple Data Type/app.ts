"use strict"
var tuple:[number,string,symbol,boolean]=[100,"jitu",Symbol("10"),true]
tuple.push("jitu");
console.log(tuple);
console.log(typeof tuple);


var tuple1:readonly[number,string,symbol,boolean]=[100,"jitu",Symbol("10"),true]
tuple1.push("jitu");
// Property 'push' does not exist on type 'readonly [number, string, symbol, boolean]'.ts(2339)
console.log(tuple);


