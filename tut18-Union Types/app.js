"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var studentData = "jitu";
studentData = [];
studentData = 100;
function fruitsData(val) {
    if (val === 1) {
        return "apple";
    }
    else {
        return ["apple", "banana"];
    }
}
console.log(fruitsData(1));
console.log(fruitsData(2));
function studentInfo(data) {
    if (typeof data === 'string') {
        console.log("Student name is:" + data);
    }
    else if (typeof data === 'number') {
        console.log("Student age is:" + data);
    }
    else {
        console.log("Student entered Boolean data");
    }
}
studentInfo("jitu");
studentInfo(100);
studentInfo(true);
//# sourceMappingURL=app.js.map