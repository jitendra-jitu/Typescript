"use strict";
console.log("DOM Handling and TypeCasting");
let headerElement = document.querySelector("h1");
let headingElementClass = document.querySelector(".headingClass");
let anchorTag = document.querySelector("a");
let anchorClass = document.querySelector(".anchorClass");
console.log(headerElement.classList);
console.log(headingElementClass.classList);
console.log(anchorTag.href);
console.log(anchorClass.href);
// !-> Must not be empty 
let anchor = document.querySelector("a");
console.log(anchor === null || anchor === void 0 ? void 0 : anchor.href); // safe: prints undefined if no <a> exists
export {};
//# sourceMappingURL=app.js.map