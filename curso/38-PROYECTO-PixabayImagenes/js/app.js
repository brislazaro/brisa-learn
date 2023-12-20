const input = document.querySelector("#termino");
const container = document.querySelector("#paginacion");
const searchBtn = document.querySelector("#button");

const key = "41349536-034eb62f6662da54e42d5e1d7";

searchBtn.addEventListener("click", function (e) {
  e.preventDefault();
  let resultValue = input.value;

  if (resultValue === "") {
    const div = document.createElement("div");
    div.classList.add(
      "bg-red-100",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-lg",
      "mx-auto",
      "mt-6",
      "text-center"
    );
    div.textContent = "Error! Añade un termino de Busqueda";
    container.appendChild(div);
  } else {
    resultValue = resultValue.replaceAll(" ", "+");
    const apiURL = `https://pixabay.com/api/?key=${key}&q=${resultValue}&image_type=photo`;
    console.log(resultValue);

    fetch(apiURL)
      .then((datos) => datos.json())
      .then((datos) => {
        console.log(datos.hits);
        printImages(datos.hits);
      });
  }
});

function printImages(busqueda) {
  container.innerHTML = "";
  for (let i = 0; i < busqueda.length; i++) {
    const element = busqueda[i];

    const divContainer = document.createElement("div");
    divContainer.classList.add("col-md-4", "divCont");
    container.appendChild(divContainer);

    const divCard = document.createElement("div");
    divCard.classList.add("card", "mb-4", "card");
    divContainer.appendChild(divCard);

    const img = document.createElement("img");
    img.classList.add("imgcss");
    img.src = element.largeImageURL;
    divCard.appendChild(img);

    const likeContainer = document.createElement("p");
    likeContainer.innerHTML = `<span class='likes'>${element.likes}</span> Me gusta`;
    divCard.appendChild(likeContainer);

    const views = document.createElement("p");
    views.innerHTML = `<span class='likes'>${element.views}</span> Veces vistas`;
    divCard.appendChild(views);

    const fotoBtn = document.createElement("button");
    fotoBtn.classList.add("fotoBtn");
    fotoBtn.innerHTML = `<span class='color'>Ver foto</span>`;
    divCard.appendChild(fotoBtn);

    fotoBtn.addEventListener("click", function (e) {
      window.location.href = `${element.pageURL}`;
    });
  }
}
