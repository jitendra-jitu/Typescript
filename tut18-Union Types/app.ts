var studentData : string|number|[]="jitu";

studentData=[];
studentData=100;


function fruitsData(val:number):string | string[] | number {

    if(val===1){
        return "apple";
    }
    else{
        return ["apple","banana"];
    }
}

console.log(fruitsData(1))
console.log(fruitsData(2))


function studentInfo(data:string|number|boolean) {
    if(typeof data==='string'){
        console.log("Student name is:"+data);
    }
    else if(typeof data==='number'){
        console.log("Student age is:"+data);
    }
    else{
        console.log("Student entered Boolean data" );
    }
}


studentInfo("jitu");
studentInfo(100);
studentInfo(true);


