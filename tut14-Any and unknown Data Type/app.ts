var anyValue:any="jitu";
anyValue=12;
anyValue=true;
anyValue={};
anyValue=null;
anyValue=undefined;


var unknownValue:unknown="jitu";

if(typeof unknownValue==="string"){
    unknownValue=12;
}
if(typeof unknownValue==="number"){
    unknownValue=true;
}
if(typeof unknownValue==="boolean"){
    unknownValue={};
}
if(typeof unknownValue==="object"){
    unknownValue=undefined;
}

console.log(anyValue);
console.log(unknownValue);


