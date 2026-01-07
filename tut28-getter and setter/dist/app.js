"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    _name = "jitu";
    _email = "gudelajitendra@gmail.com";
    get name() {
        return "emp_name:" + this._name;
    }
    set name(val) {
        this._name = val;
    }
    set email(val) {
        this._email = val;
    }
}
var emp = new Employee();
console.log(emp.name);
emp.name = "xxxx";
console.log(emp.name);
console.log(emp._name);
//# sourceMappingURL=app.js.map