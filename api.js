import { Product } from "./constructors/product.js";
import { navigate } from "./router.js";
import { cartConstructor } from "./constructors/cart.js";

// NAVIGEERIMINE OSTUKORVI
document.getElementById("cart-button").addEventListener("click", () => {
  navigate("cart");
});

// Aksli versioon
export async function getData() {
  try {
    let response = await fetch(`./data.json`);
    let data = await response.json();
    // console.log(data);
  } catch (error) {
    console.log("Error", error);
  }
}

// Õpetaja versioon
export const getData2 = async () => {
  try {
    const data = await fetch(`./data.json`);
    const jsonData = await data.json();
    const constructedData = jsonData.map(
      (product) =>
        new Product(product.id, product.name, product.price, product.category),
    );
    return constructedData;
  } catch (error) {
    console.log(error);
  }
};

export function updateCartCount() {
  const countElement = document.getElementById("cart-count");
  if (!countElement) return;

  const total = cartConstructor.totalItems;
  countElement.textContent = total > 0 ? `(${total})` : "";
}

updateCartCount();

cartConstructor.onChange(() => {
  updateCartCount();
});

