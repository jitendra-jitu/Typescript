"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CollegeDate {
    name;
    constructor(name) {
        this.name = name;
    }
    getStudentList() {
        let studentList = ["jitu", "Anu", "Keerthi"];
        console.log(studentList);
        return studentList;
    }
    displayAffliatedUniversity() {
        console.log("Affliated to JNTUK...");
    }
}
var collegeDate1 = new CollegeDate("NRI inst of tech...");
collegeDate1.getStudentList();
//# sourceMappingURL=app.js.map