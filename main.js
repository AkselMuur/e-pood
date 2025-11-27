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
    this.items.push({ product, quantity });
  }

  removeProduct(productId) {
    cart = cart.filter();
  }

  calculateTotal() {
    return Product.price * Cart.quantity;
  }

  get totalItems() {}
}

const cart = new Cart();

cart.addProduct(laptop, 2);
cart.removeProduct(1);

//console.log(cart.calculateTotal()); // Kokku hind

//console.log(cart.totalItems); // Kokku tooteid ostukorvis

//console.log(cart.quantity);
console.log(cart);

//ES6 MODULE bro code video
