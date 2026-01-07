# Getters and Setters in TypeScript

## 1. What Are They?
- **Getters**: Special methods that allow you to access private or protected properties in a controlled way.
- **Setters**: Special methods that allow you to update private or protected properties with validation or logic.
- They provide **encapsulation** and help enforce rules when working with class properties.

---

## 2. Why Use Them?
- Hide internal implementation details.
- Add formatting or computed values when reading.
- Validate or transform data when writing.
- Keep class usage clean and intuitive.

---

## 3. Syntax Example

```ts
class Employee {
  private _name: string;
  private _email: string;

  constructor(name: string, email: string) {
    this._name = name;
    this._email = email;
  }

  // Getter
  get name(): string {
    return "Employee Name: " + this._name;
  }

  // Setter
  set name(value: string) {
    if (value.length > 0) {
      this._name = value;
    } else {
      throw new Error("Name cannot be empty");
    }
  }

  // Getter for email
  get email(): string {
    return this._email;
  }

  // Setter for email
  set email(value: string) {
    if (value.includes("@")) {
      this._email = value;
    } else {
      throw new Error("Invalid email address");
    }
  }
}

// Usage
const emp = new Employee("Jitu", "gudelajitendra@gmail.com");

console.log(emp.name);   // "Employee Name: Jitu"
emp.name = "Ajit";       // updates name
console.log(emp.name);   // "Employee Name: Ajit"
```

