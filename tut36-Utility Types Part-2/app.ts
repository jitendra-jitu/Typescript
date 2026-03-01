interface student{
    name:string,
    location:string,
    noOfStudents:number,
    noOfBraches:number
}

let student1:Omit<student,'noOfBraches'| 'noOfStudents'>={
    name:"jitu",
    location:"Nellore",
}

let student2:Omit<student,'noOfBraches'>={
    name: "jitu",
    location: "Nellore",
    noOfStudents: 0
}


type APIStatus="Pending"|'error'|'loading'|'success';

let apiCallWithExclude:Exclude<APIStatus,"error">="Pending";
let apiCallWithExtract:Extract<APIStatus,"error"| "Pending">="error";


type RandomType=string|number|null|string[];
let random:NonNullable<RandomType>=20;

type role="admin"|"user"|"guest";
let roleName:Record<role,string>={
    user: "jitu",
    admin: "jitu",
    guest: "None"
}




