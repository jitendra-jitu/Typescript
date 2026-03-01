type student={
    name:string,
    rollNo:string,
    dept:string,
    [key:string]:number|string
}
let student1:student={
    name:"jitu",
    rollNo:"22KN5A0506",
    dept:"CSE",
    phone:9347233706,
    email:"gudelajitendra987@gmail.com"
}
student1.city="vijaywada";


type student2={
    name:string,
    rollNo:string,
    dept:string,
    readonly [key:string]:number|string
}
let student2:student2={
    name:"jitu",
    rollNo:"22KN5A0506",
    dept:"CSE",
    phone:9347233706,
    email:"gudelajitendra987@gmail.com"
}
// student2.city="vijaywada";   // NOT ALLOWED...
