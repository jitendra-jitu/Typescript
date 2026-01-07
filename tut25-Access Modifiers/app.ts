class Product {
  public name: string;
  private price: number;
  pId: number;
  protected inCart = false;
  isOrdered = false;

  constructor(name: string, price: number, pId: number) {
    this.name = name;
    this.price = price;
    this.pId = pId;
  }

  addToCart(): void {
    this.inCart = true;
  }

  buyProduct() {
    if (this.inCart) {
      return `product ${this.name} is ordered in ${this.price}`;
    } else {
      return "No product is in Cart..";
    }
  }
}

class Order extends Product {
  checkCartStatus() {
    // ✅ Allowed: subclass can access protected member
    return this.inCart ? "Item is in cart" : "Cart is empty";
  }
}

let product = new Product("IQOO NEO PRO", 25000, 1000);
console.log(product.name);   // ✅ public
// console.log(product.price);  // private ❌ Error
console.log(product.pId);    // ✅ default (public)
// console.log(product.inCart); // ❌ Error: protected

let order = new Order("Laptop", 50000, 2000);
order.addToCart();
console.log(order.checkCartStatus()); // ✅ "Item is in cart"
