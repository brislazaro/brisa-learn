let catalogo = [
  {
    image: "./img/corona.jpeg",
    type: "The best",
  },
  {
    image: "./img/italian.jpeg",
    type: "Italian Food",
  },
  {
    image: "./img/mexican.jpeg",
    type: "Mexican Food",
  },
  {
    image: "./img/seafood.jpeg",
    type: "Sea Food",
  },
];

function printProducts() {
  const principalPageEl = document.querySelector(".products");

  for (let i = 0; i < catalogo.length; i++) {
    const element = catalogo[i];

    const listOfProducts = document.createElement("div");
    listOfProducts.classList.add("food");

    principalPageEl.appendChild(listOfProducts);

    const catalogoInfo = document.createElement("a");
    catalogoInfo.href = "thebest.html";

    listOfProducts.appendChild(catalogoInfo);

    const imageEl = document.createElement("img");
    imageEl.classList.add("product__food");
    imageEl.src = element.image;

    catalogoInfo.appendChild(imageEl);

    const typeEl = document.createElement("p");
    typeEl.innerHTML = element.type;

    catalogoInfo.appendChild(typeEl);
  }
}
printProducts();
