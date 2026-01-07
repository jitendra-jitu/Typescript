# DOM Handling and TypeCasting in TypeScript

## 1. What is DOM Handling?
- The **DOM (Document Object Model)** represents the structure of an HTML page.
- With TypeScript, you can safely access and manipulate DOM elements.
- Example:
  ```
  let headerElement = document.querySelector("h1");
  console.log(headerElement?.textContent);
  ```
## 2. Why TypeScript Warns About null

- document.querySelector() can return:
1. The element (if found).
2. null (if not found).
TypeScript forces you to handle the null case to avoid runtime errors.

## 3. Non‑Null Assertion (!)
Use ! when you are sure the element exists.

Example:
```
let headerElement = document.querySelector("h1")!;
console.log(headerElement.classList);
```
⚠️ If the element is missing, your code will crash.

## 4. Type Casting (as)
- querySelector returns a generic Element | null.
- Use as to tell TypeScript the specific type of element.

Example:
```
let headingElement = document.querySelector(".headingClass") as HTMLHeadingElement;
console.log(headingElement.classList);

let anchorElement = document.querySelector("a") as HTMLAnchorElement;
console.log(anchorElement.href);
```
## 5. Combining ! and as
You can combine both when you are sure the element exists and want to specify its type.

Example:
```
let anchorClass = document.querySelector(".anchorClass")! as HTMLAnchorElement;
console.log(anchorClass.href);
```
## 6. Safe Approach (Recommended)

Instead of forcing with !, check if the element exists:

```
let anchorTag = document.querySelector("a");
if (anchorTag) {
  console.log(anchorTag.href);
}
Or use optional chaining:
ts
console.log(anchorTag?.href);
```
## 7. Summary
```
! → “I promise this element is not null.”
as → “I know the exact type of this element.”
Together, they let you safely use DOM properties in TypeScript.
Best practice: use type casting and null checks for safer code.
```