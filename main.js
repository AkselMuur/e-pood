import { Product } from "./constructors/product.js";
import { cartConstructor } from "./constructors/cart.js";
import { Order } from "./constructors/order.js";
import { Customer } from "./constructors/customer.js";
import { getData, getData2 } from "./api.js";

import { navigate, initRouter } from "./router.js";

// --- DEMO KONSTRUKTORID (võid jätta alles või eemaldada) ---
const laptop = new Product(1, "Sülearvuti", 999.99, "Elektroonika");
const phone = new Product(2, "Telefon", 599.99, "Elektroonika");

const customer = new Customer("Alice");

// --- ROUTER KÄIVITAMINE ---
document.addEventListener("DOMContentLoaded", () => {
  initRouter(); // LOEB URL-i ja kuvab õige vaate
});

// --- NAVIGEERIMISNUPUD ---
document.getElementById("favorites-button").addEventListener("click", () => {
  navigate("favorites");
});

document.getElementById("cart-button").addEventListener("click", () => {
  navigate("cart");
});

document.getElementById("home-link")?.addEventListener("click", (e) => {
  e.preventDefault();
  navigate("products");
});
