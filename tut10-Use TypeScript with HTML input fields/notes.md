# TypeScript + HTML Input Fields

## 📌 Key Points
- TypeScript adds **type safety** when working with HTML input fields.
- Use `HTMLInputElement` type to access `.value`, `.checked`, etc.
- Always cast DOM elements properly using `as` keyword.
- Event listeners require correct event type (`Event`, `KeyboardEvent`, etc.).
- Input values are always strings → convert to `number`, `boolean`, etc. when needed.

---

## 🔑 Syntax & Examples

```ts
// ✅ Selecting input field
const inputElement = document.getElementById("username") as HTMLInputElement;

// ✅ Getting value
const username: string = inputElement.value;

// ✅ Handling button click
const button = document.getElementById("submitBtn") as HTMLButtonElement;
button.addEventListener("click", () => {
  console.log("User:", inputElement.value);
});

// ✅ Handling input change
inputElement.addEventListener("input", (event: Event) => {
  const target = event.target as HTMLInputElement;
  console.log("Current value:", target.value);
});

// ✅ Number conversion
const ageInput = document.getElementById("age") as HTMLInputElement;
const age: number = parseInt(ageInput.value, 10);

// ✅ Checkbox example
const checkbox = document.getElementById("agree") as HTMLInputElement;
if (checkbox.checked) {
  console.log("User agreed!");
}
