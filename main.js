import { Product } from "./constructors/product.js";

import { Cart } from "./constructors/cart.js";

import { Order } from "./constructors/order.js";

import { Customer } from "./constructors/customer.js";

import { getData, getData2 } from "./api.js";
// Loo mõned tooted

const laptop = new Product(1, "Sülearvuti", 999.99, "Elektroonika");

const phone = new Product(2, "Telefon", 599.99, "Elektroonika");

// Loo ostukorv ja lisa tooted

const cart = new Cart();

cart.addProduct(laptop, 1);

cart.addProduct(phone, 2);

// Kuvage ostukorvi summa ja toodete arv

//console.log("Kogusumma:", cart.calculateTotal());

//console.log("Kokku tooteid ostukorvis:", cart.totalItems);

// Loo klient ja esita tellimus

const customer = new Customer("Alice");

//customer.placeOrder(cart);

// Kuvage tellimuste ajalugu

//customer.printOrderHistory();

getData();
getData2();
