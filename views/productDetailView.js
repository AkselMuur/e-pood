export const displayProductDetailView = (product) => {
  const container = document.getElementById("detailed-view");
  container.innerHTML = "";

  const productCard = document.createElement("div");
  productCard.classList.add("product");

  productCard.innerHTML = `
      <h2>${product.title}</h2>
      <img src="${product.image}" alt="${product.title}" width="150">
      <p>Kategooria: ${product.category}</p>
      <p>Hind: $${product.price}</p>
      <p>${product.description}</p>
      <p>ID: ${product.id}</p>
    `;

  container.append(productCard);
};
