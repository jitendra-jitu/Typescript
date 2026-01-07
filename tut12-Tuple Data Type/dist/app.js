"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tuple = [100, "jitu", Symbol("10"), true];
tuple.push("jitu");
console.log(tuple);
console.log(typeof tuple);
var tuple1 = [100, "jitu", Symbol("10"), true];
tuple1.push("jitu");
// Property 'push' does not exist on type 'readonly [number, string, symbol, boolean]'.ts(2339)
console.log(tuple);
//# sourceMappingURL=app.js.map