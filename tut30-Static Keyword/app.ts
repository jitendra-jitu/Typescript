class Company {
    static name:string="Cognizant";
    location:string="Siruseri IT Park";

    getName(){
        return this.location;
    }

    // getName():string{
    //     return name;
    // }
    // cannot use static variables in static method 
}

var company=new Company();
console.log(Company.name);
console.log(company.location);


