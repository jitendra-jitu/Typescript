class Employee{
    _name:string="jitu";
    _email:string="gudelajitendra@gmail.com";

    get name(): string { 
        return "emp_name:" + this._name; 
    } 
    set name(val: string) { 
        this._name = val; 
    }
    
    set email(val:string){
        this._email=val;
    }
}


var emp=new Employee();
console.log(emp.name);
emp.name="xxxx";

console.log(emp.name);
console.log(emp._name);


