// 1.

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

const laptop = new Product(1, "Sülearvuti", 999.99, "Elektroonika");

//console.log(laptop);

//console.log(laptop.describe());

//console.log(Product.discountedPrice(laptop.price, 10));

// 2.

class Cart {
  constructor() {
    this.items = [];
  }
  addProduct(product, quantity) {
    const existingItem = this.items.find(
      (item) => item.product.title === product.title
    );
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ product, quantity });
    }
  }

  removeProduct(productId) {
    const existingItem = this.items.find(
      (item) => item.product.id === productId
    );

    if (existingItem) {
      existingItem.quantity -= 1;
      if (existingItem.quantity <= 0) {
        this.items = this.items.filter((item) => item.product.id !== productId);
      }
    }
  }

  calculateTotal() {
    return this.items.reduce((sum, item) => {
      return (sum + item.product.price * item.quantity).toFixed(2);
    }, 0);
  }

  get totalItems() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }
}

const cart = new Cart();

cart.addProduct(laptop, 2);
cart.addProduct(laptop, 2);
cart.removeProduct(1);

console.log(cart.calculateTotal());
console.log(cart.totalItems);

// 3.

//ES6 MODULE bro code video
