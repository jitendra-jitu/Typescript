enum whoType{
    student="student",
    teacher="teacher",
    management="management",
    labAssistant="labAssistant"
}

let labAssistant:whoType=whoType.labAssistant;
let management:whoType=whoType.management;

console.log(labAssistant);
console.log(management);


enum Fruit{
    a="apple",
    b="banana",
    c="coconut"
}


console.log(Fruit.a)
console.log(Fruit.b)
console.log(Fruit.c)


enum Roles{
    admin,
    manager,
    teamLead,
    Developer,
    tester
}

console.log(Roles.admin)
console.log(Roles.manager)
console.log(Roles[2])
