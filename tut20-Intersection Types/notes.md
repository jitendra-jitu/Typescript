# Intersection Types in TypeScript

## 📌 What are Intersection Types?
Intersection types allow you to combine multiple types into one.  
They use the `&` operator, meaning the resulting type must satisfy **all** combined types.

---

## 🔹 Basic Example
```ts
interface Person {
  name: string;
}

interface Employee {
  employeeId: number;
}

type Staff = Person & Employee;

const staffMember: Staff = {
  name: "Alice",
  employeeId: 101
};
```
## Combining Multiple Interfaces

```
interface Vehicle {
  engine: string;
}

interface FourWheeler {
  wheels: number;
}

type Car = Vehicle & FourWheeler;

const myCar: Car = {
  engine: "V6",
  wheels: 4
};

```


## Intersection with Type Aliases


```
type Admin = {
  role: string;
};

type User = {
  username: string;
};

type AdminUser = Admin & User;

const admin: AdminUser = {
  role: "SuperAdmin",
  username: "john_doe"
};
```



## Intersection with Type Aliases


```
type Admin = {
  role: string;
};

type User = {
  username: string;
};

type AdminUser = Admin & User;

const admin: AdminUser = {
  role: "SuperAdmin",
  username: "john_doe"
};

```