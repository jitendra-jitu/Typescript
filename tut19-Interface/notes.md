# Interface Concepts in TypeScript

## 📌 What is an Interface?
An **interface** in TypeScript defines the structure (shape) of an object.  
It specifies the properties and their types, but does not provide implementation.

---

## 🔹 Basic Interface
```
interface Person {
  name: string;
  age: number;
}

const user: Person = {
  name: "Alice",
  age: 25
};
```


## Optional Properties

```
interface Product {
  id: number;
  name: string;
  description?: string; // optional
}

const item: Product = {
  id: 1,
  name: "Laptop"
};

```


## Readonly Properties

```
interface Config {
  readonly apiKey: string;
  timeout: number;
}

const settings: Config = {
  apiKey: "12345",
  timeout: 5000
};

// settings.apiKey = "67890"; ❌ Error: cannot modify readonly property

```



## Function Types

```
interface MathOperation {
  (a: number, b: number): number;
}

const add: MathOperation = (x, y) => x + y;
```


## Extending Interfaces
```
interface Vehicle {
  engine: string;
  fuelType: string;
}

interface FourWheeler extends Vehicle {
  wheels: number;
  transmission: string;
}

interface Car extends FourWheeler {
  brand: string;
  model: string;
}

const myCar: Car = {
  engine: "V6",
  fuelType: "Petrol",
  wheels: 4,
  transmission: "Automatic",
  brand: "Honda",
  model: "Civic"
};
```