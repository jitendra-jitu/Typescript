"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function totalPrice(price, item, text) {
    if (text) {
        console.log(text + price * item);
    }
    else {
        console.log(price * item);
    }
}
totalPrice(10, 20, "Total Cost: ");
totalPrice(10, 20);
// function simple(data:number|string|boolean){
function simple(data) {
    console.log(data);
}
simple(123);
simple("jituuuu");
simple(true);
//# sourceMappingURL=app.js.map