"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    login(userName, password) {
        if (userName && password) {
            return "Logged in..";
        }
        else {
            return "Login Failed";
        }
    }
    result(marks) {
        if (marks) {
            return "Passed:" + marks;
        }
        else {
            return "Failed!, try again";
        }
    }
}
class Teacher extends Student {
    subject(subject) {
        if (subject) {
            return "He/She teaches the Subject:" + subject;
        }
        else {
            return "Error! Wrong subject type given...";
        }
    }
}
let s1 = new Student();
console.log(s1.result(100));
console.log(s1.login("jitu", "1234"));
let t1 = new Teacher();
console.log(t1.login("jitu", "1234"));
//# sourceMappingURL=app.js.map