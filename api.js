import { Product } from "./constructors/product.js";

import { navigate } from "./router.js";
document.getElementById("cart-button").addEventListener("click", () => {
  navigate("cart");
});

//Aksli versioon
export async function getData() {
  try {
    let response = await fetch(`./data.json`);

    let data = await response.json();

    // console.log(data);
  } catch (error) {
    console.log("Error", error);
  }
}

//Õpetaja versioon
export const getData2 = async () => {
  try {
    const data = await fetch(`./data.json`);
    const jsonData = await data.json();
    const constructedData = jsonData.map(
      (product) =>
        new Product(product.id, product.name, product.price, product.category)
    );
    //  console.log(constructedData);
    return constructedData;
  } catch (error) {
    console.log(error);
  }
};
