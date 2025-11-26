class Product {
  constructor(id, title, price, category) {
    this.id = id;
    this.title = title;
    this.price = price;
    this.category = category;
  }

  describe() {
    return this.title + ", " + this.price + "€, " + this.category;
  }
  static discountedPrice(price, discount) {
    return (price - price * (discount / 100)).toFixed(2);
  }
}

/*
  displayProduct() {
    console.log(`Product: ${this.name}`);
    console.log(`Product: ${this.price.toFixed(2)}`);
  }
  calculateTotal(salesTax) {
    return this.price + this.price * salesTax;
  }
}

const salesTax = 0.05;
const product1 = new Product("Shirt", 19.99);
const product2 = new Product("Pants", 22.5);

product2.displayProduct();

const total = product2.calculateTotal(salesTax);
console.log(`Total price (with tax): $${total.toFixed(2)}`);
*/

const laptop = new Product(1, "Sülearvuti", 999.99, "Elektroonika");

console.log(laptop.describe());

console.log(Product.discountedPrice(laptop.price, 10)); // 10% allahindlus

class Cart {
  addProduct(Product, quantity) {
    this.Product=Product;
    this.quantity = quantity;
  }

  removeProduct(productId) {}

  calculateTotal() {
    return Product.price * Cart.quantity;
  }

  get totalItems() {}
}

const cart = new Cart();

cart.addProduct(laptop, 2);

console.log(cart.calculateTotal()); // Kokku hind

console.log(cart.totalItems); // Kokku tooteid ostukorvis

console.log(cart.quantity);
console.log(cart);
