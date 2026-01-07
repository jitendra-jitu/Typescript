# Access Modifiers in TypeScript

## 1. What are Access Modifiers?
- Access modifiers control the **visibility** of class members (properties and methods).
- They define **who can access** or use a member.

---

## 2. Types of Access Modifiers

### 🔹 Public
- Default in TypeScript.**************
- Members are accessible **anywhere** (inside and outside the class).
```
class Person {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
}
let p = new Person("Alice");
console.log(p.name); // ✅ accessible

```


### Private
- Members are accessible only inside the class.
- Not accessible outside or in subclasses.

```
class Person {
  private ssn: string;
  constructor(ssn: string) {
    this.ssn = ssn;
  }
  showSSN() {
    return this.ssn; // ✅ accessible inside
  }
}
let p = new Person("123-45-6789");
console.log(p.ssn); // ❌ Error
```



### Protected
- Members are accessible inside the class and its subclasses.
- Not accessible outside the class hierarchy.

```
class Animal {
  protected sound: string = "Roar";
}
class Lion extends Animal {
  makeSound() {
    console.log(this.sound); // ✅ accessible in subclass
  }
}
let a = new Animal();
console.log(a.sound); // ❌ Error
```


###  Read-only Access Modifier in Typescript
- After initialization, the read-only access modifier marks a property as immutable, enabling it to be read but not directly updated. This improves data security and makes state management easier.

Example 1: Read-only property in a class

```
class User {
    readonly id: number;
    constructor(id: number) {
        this.id = id;
    }
}

const user = new User(101);
console.log(user.id); // 101
// user.id = 102; // Error: Cannot assign to 'id' because it is a read-only property

```
