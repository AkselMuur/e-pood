import { navigate } from "../router.js";
import { cartConstructor } from "../constructors/cart.js";

export const displayAllProductsView = async () => {
  const container = document.getElementById("main-container");

  container.innerHTML = "<h2>Tooted</h2>";

  const productsContainer = document.createElement("div");
  productsContainer.classList.add("products-container");

  const response = await fetch("../data/products.json");
  const productsData = await response.json();

  productsData.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("product");
    productCard.innerHTML = `
        <h3>${product.title}</h3>
        <img src="${product.image}" alt="${product.title}" class="product-image">
        <p>Kategooria: ${product.category}</p>
        <p>Hind: $${product.price}</p>
        <button class="favorites">Lisa lemmikutesse</button> 
      `;

    productCard.addEventListener("click", () => {
      navigate("product", product.id);
    });

    //NB!! Kaks viis nuppude lisamiseks
    //1. lisan nupu innerHtml'i ja kasutan addEventListener'i, mis on all pool
    //2. Ostukorvi nupu lisamine createElement'iga, kus saab sündumse külge panna
    const cartButton = document.createElement("button");
    cartButton.textContent = "Lisa ostukorvi";

    cartButton.addEventListener("click", (event) => {
      event.stopPropagation();
      cartConstructor.addProduct(product);
    });
    //ostukorvi nupu lisamine productCardile
    productCard.appendChild(cartButton);

    //ühe toote kaardi lisan toodete konteinerisse
    productsContainer.append(productCard);
  });

  // Tooted lisan main kontainersisse
  container.append(productsContainer);
};
