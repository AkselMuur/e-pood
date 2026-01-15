import { cartConstructor } from "../constructors/cart.js";
import { navigate } from "../router.js";

export const displayProductDetailView = async (id) => {
  const container = document.getElementById("detailed-view");

  const response = await fetch("../data/products.json");
  const products = await response.json();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    container.innerHTML = "<p>Toodet ei leitud</p>";
    return;
  }

  const productCard = document.createElement("div");
  productCard.classList.add("product");
  container.innerHTML = `<h1>${product.title}</h1>`;

  productCard.innerHTML = `
      <h2>${product.title}</h2>
      <img src="${product.image}" alt="${product.title}" width="150">
      <p>Kategooria: ${product.category}</p>
      <p>Hind: $${product.price}</p>
      <p>${product.description}</p>
      <p>ID: ${product.id}</p>
      <button class="favorites">Lisa lemmikutesse</button>
     <button id="cart-nav">Lisa ostukorvi</button>
    `;

  container.append(productCard);

  document.getElementById("cart-button").addEventListener("click", () => {
    cartConstructor.addProduct(product);
    navigate("cart");
  });
};
