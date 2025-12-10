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
    const total = this.items.reduce((sum, item) => {
      return sum + item.product.price * item.quantity;
    }, 0);
    return total.toFixed(2);
  }

  get totalItems() {
    return this.items.reduce((count, item) => count + item.quantity, 0);
  }
}

export { Cart };
