"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Company {
    static name = "Cognizant";
    location = "Siruseri IT Park";
    getName() {
        return this.location;
    }
}
var company = new Company();
console.log(Company.name);
console.log(company.location);
//# sourceMappingURL=app.js.map