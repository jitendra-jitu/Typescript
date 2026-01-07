
interface CollegeDataType{
    name:string;
    displayAffliatedUniversity():void;
    getStudentList():string[];

}

class CollegeDate implements CollegeDataType{
    name:string;
    constructor(name:string){
        this.name=name;
    }
    getStudentList(): string[] {
        let studentList:string[]=["jitu","Anu","Keerthi"];
        console.log(studentList);
        return studentList;
    }
    displayAffliatedUniversity(): void {
        console.log("Affliated to JNTUK...");
    }
}

var collegeDate1=new CollegeDate("NRI inst of tech...");
collegeDate1.getStudentList();









