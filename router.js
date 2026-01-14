import { displayAllProductsView } from "./views/allProductsView.js";
import { displayProductDetailView } from "./views/productDetailView.js";
import { displayCartView } from "./views/cartView.js";

export const navigate = (view, param) => {
  document.getElementById("main-container").innerHTML = "";
  document.getElementById("detailed-view").innerHTML = "";
  document.getElementById("cart-view").innerHTML = "";
  document.getElementById("favorite-view").innerHTML = ""; // parandatud

  const views = {
    category: () => displayProductDetailView(param || "all"),
    product: () => loadProductView(param),
    cart: () => displayCartView(),
  };

  if (views[view]) {
    views[view]();

    const newUrl = view === "category" ? "/" : `/${view}/${param || ""}`;

    window.history.pushState({}, "", newUrl);
  }
};

/*
if(pushState){
    const url = constructUrl(view,param);
    window.history.pushState({view,param})
}

const constructUrl = (view,param) => {
    switch(view){
        case 'allProducts'
        return param && param !=='all'?'/category'
    }
}

window.addEventListener('popstate', () => handleRouting())

window.addEventListener("DOMContentLoaded", () => handleRouting())

*/
