import { navigate } from "../router.js";
import { cartConstructor } from "../constructors/cart.js";

export const displayAllProductsView = async () => {
  const container = document.getElementById("main-container");

  container.innerHTML = "<h2>Tooted</h2>";

  const productsContainer = document.createElement("div");
  productsContainer.classList.add("products-container");

  const favorites = {
    get() {
      return JSON.parse(localStorage.getItem("favorites")) || [];
    },
    save(list) {
      localStorage.setItem("favorites", JSON.stringify(list));
    },
    toggle(id) {
      const list = this.get();
      const index = list.indexOf(id);

      if (index === -1) list.push(id);
      else list.splice(index, 1);

      this.save(list);
    },
    isFavorite(id) {
      return this.get().includes(id);
    },
  };
  // -------------------------

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
    `;

  
    const favButton = document.createElement("button");
    favButton.classList.add("favorites");

   
    if (favorites.isFavorite(product.id)) {
      favButton.textContent = "Eemalda lemmikutest";
      favButton.classList.add("active");
    } else {
      favButton.textContent = "Lisa lemmikutesse";
    }

    favButton.addEventListener("click", (event) => {
      event.stopPropagation();

      favorites.toggle(product.id);

      if (favorites.isFavorite(product.id)) {
        favButton.textContent = "Eemalda lemmikutest";
        favButton.classList.add("active");
      } else {
        favButton.textContent = "Lisa lemmikutesse";
        favButton.classList.remove("active");
      }
    });

    productCard.appendChild(favButton);
   
    productCard.addEventListener("click", () => {
      navigate("product", product.id);
    });


    const cartButton = document.createElement("button");
    cartButton.textContent = "Lisa ostukorvi";

    cartButton.addEventListener("click", (event) => {
      event.stopPropagation(); 
      cartConstructor.addProduct(product);
    });

    productCard.appendChild(cartButton);
    // -------------------------

    productsContainer.append(productCard);
  });

  container.append(productsContainer);
};

//console.log("localStorage:", localStorage.getItem("favorites"));
