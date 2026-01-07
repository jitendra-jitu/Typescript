# Tuples in TypeScript

## 📌 What is a Tuple?
- A **tuple** is a special type in TypeScript that allows you to define an array with **fixed length** and **specific types** for each element.
- Unlike regular arrays, tuples enforce the type and order of elements.

---

## 🛠 Syntax
```ts
let tupleName: [type1, type2, type3];
```

## Example
```
let person: [string, number];
person = ["Alice", 25]; // ✅ Correct
person = [25, "Alice"]; // ❌ Error (wrong order)
```


## Differneces b/w Array & Tuple
```
Arrays → Homeogenes, flexible, growable, best for collections of similar items.
Tuples → heterogeneous, strict, fixed-length, best for grouping related but different data types.
```