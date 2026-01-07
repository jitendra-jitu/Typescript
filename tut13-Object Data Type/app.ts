var userData1:{
    name:string,
    age:number,
    company:string
}={
    name:"jitu",
    age:12,
    company:"cognizant..."
}
userData1.name="Devi"
console.log(userData1);


var userData2:{
    [key:string]:string|null|number
}={
    name:"jitu",
    age:12,
    company:null
}
userData2.name="Devi";
console.log(userData2);

/* 
index signature
---------------
[key: string]: string | null | number  
This is called an index signature.
It means:

Any property with a string key is allowed.

The value must be either string, number, or 
*/ 



var userData3:{
    name:string,
    age:number,
    company:string,
    address:{}
}={
    name:"jitu",
    age:12,
    company:"cognizant...",
    address:{
        streetNo:"3-1/4-7",
        city:"vijaywada",
        pincode:520001
    }
}
userData3.name="Devi";
console.log(userData3);


var userData4:{
    name:string,
    age:number,
    company:string,
    address:{
        streetNo:string | number,
        city:string,
        pincode:number
    }
}={
    name:"jitu",
    age:12,
    company:"cognizant...",
    address:{
        streetNo:"3-1/4-7",
        city:"vijaywada",
        pincode:520001
    }
}
userData4.name="Devi";
console.log(userData4);


