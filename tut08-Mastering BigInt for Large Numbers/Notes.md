# 📘 BigInt in JavaScript

BigInt is a built-in object in JavaScript that provides a way to represent **whole numbers larger than 2⁵³ - 1**, which is the largest number JavaScript can reliably represent with the `Number` primitive.

---

## ✨ Why BigInt?
- JavaScript `Number` type is a **double-precision 64-bit binary format IEEE 754 value**.
- The maximum safe integer is `Number.MAX_SAFE_INTEGER` → `9007199254740991` (`2^53 - 1`).
- Beyond this, precision errors occur.
- BigInt allows working with **arbitrarily large integers** without losing precision.

---

## 🛠️ Creating BigInt
You can create a BigInt in two ways:

```js
// Using the BigInt constructor
const big1 = BigInt(123456789012345678901234567890);

// Using the 'n' suffix
const big2 = 123456789012345678901234567890n;
