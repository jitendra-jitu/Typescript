console.log("Symbol...")


var symbol1=Symbol()
var symbol2=Symbol()

console.log(symbol1===symbol2)



var symbol3=Symbol("jitu")
var symbol4=Symbol("jitu")

console.log(symbol3===symbol4)
console.log(symbol3);
console.log(symbol4);


// Symbol() is introduced in ES6(2016)

const dynamicId= Symbol("id");

const obj={
    [dynamicId]:100,
    name:"jitu"
}
console.log(obj);
console.log(obj[dynamicId]);
console.log(Object.keys(obj));    // [ 'name' ]
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(id) ]