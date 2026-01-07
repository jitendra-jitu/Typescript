"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var whoType;
(function (whoType) {
    whoType["student"] = "student";
    whoType["teacher"] = "teacher";
    whoType["management"] = "management";
    whoType["labAssistant"] = "labAssistant";
})(whoType || (whoType = {}));
let labAssistant = whoType.labAssistant;
let management = whoType.management;
console.log(labAssistant);
console.log(management);
var Fruit;
(function (Fruit) {
    Fruit["a"] = "apple";
    Fruit["b"] = "banana";
    Fruit["c"] = "coconut";
})(Fruit || (Fruit = {}));
console.log(Fruit.a);
console.log(Fruit.b);
console.log(Fruit.c);
var Roles;
(function (Roles) {
    Roles[Roles["admin"] = 0] = "admin";
    Roles[Roles["manager"] = 1] = "manager";
    Roles[Roles["teamLead"] = 2] = "teamLead";
    Roles[Roles["Developer"] = 3] = "Developer";
    Roles[Roles["tester"] = 4] = "tester";
})(Roles || (Roles = {}));
console.log(Roles.admin);
console.log(Roles.manager);
console.log(Roles[2]);
//# sourceMappingURL=app.js.map