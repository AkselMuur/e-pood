import { displayAllProductsView } from "./views/allProductsView.js";
import { displayProductDetailView } from "./views/productDetailView.js";
import { displayCartView } from "./views/cartView.js";
import { displayFavoritesView } from "./views/favoritesView.js";

export const navigate = (view, param) => {
  document.getElementById("main-container").innerHTML = "";
  document.getElementById("detailed-view").innerHTML = "";
  document.getElementById("cart-view").innerHTML = "";
  document.getElementById("favorite-view").innerHTML = "";

  const views = {
    products: () => displayAllProductsView(),
    product: () => displayProductDetailView(param),
    cart: () => displayCartView(),
    favourites: () => displayFavoritesView(),
  };

  if (views[view]) {
    views[view]();
    window.history.pushState({}, "", `/${view}`);
    //const newUrl = view === "category" ? "/" : `/${view}/${param || ""}`;

    //window.history.pushState({}, "", newUrl);
  }
};
