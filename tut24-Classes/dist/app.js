"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Product {
    name;
    price;
    pId;
    inCart = false;
    isOrdered = false;
    constructor(name, price, pId) {
        this.name = name;
        this.price = price;
        this.pId = pId;
    }
    addToCart() {
        this.inCart = true;
    }
    buyProduct() {
        if (this.inCart) {
            return `product ${this.name} is ordered in ${this.price}`;
        }
        else {
            "No product is in Cart..";
        }
    }
}
var product1 = new Product("IQOO NEO PRO", 10500, 101);
product1.addToCart();
console.log(product1.buyProduct());
var product2 = new Product("Samsuny Galaxy", 20000, 102);
product2.addToCart();
console.log(product2.buyProduct());
//# sourceMappingURL=app.js.map