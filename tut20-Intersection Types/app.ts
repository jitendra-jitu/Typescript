// type personA={name:string};
// type personB={age:number};

interface personA{name:string};
interface personB{age:number};

type personC=personA & personB;


var person1:personA={
    name:"jitu"
};

var person2:personB={
    age:20
};

var person3:personC={
    name:"jitu",
    age:20
};


console.log(person1)
console.log(person2)
console.log(person3)

