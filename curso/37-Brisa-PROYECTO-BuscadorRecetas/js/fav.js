const container = document.querySelector("#resultado");
const title = document.querySelector(".modal-title-principal");
const instrucciones = document.querySelector(".text");
const btn = document.querySelector("#btnEliminar");

let datos = JSON.parse(localStorage.getItem("favoritos"));

if (datos === null) {
  datos = [];
}

function printFavs(recetas) {
  for (let i = 0; i < recetas.length; i++) {
    const element = recetas[i];

    const cardContainer = document.createElement("div");
    cardContainer.classList.add("col-md-4");
    container.appendChild(cardContainer);

    const div = document.createElement("div");
    div.classList.add("card", "mb-4");
    cardContainer.appendChild(div);

    const img = document.createElement("img");
    img.src = element.strMealThumb;
    img.classList.add("img");
    div.appendChild(img);

    const name = document.createElement("p");
    name.classList.add("name");
    name.innerHTML = element.strMeal;
    div.appendChild(name);

    const button = document.createElement("button");
    button.classList.add("my-button");
    button.textContent = "Ver receta";
    div.appendChild(button);

    button.setAttribute("data-bs-toggle", "modal");
    button.setAttribute("data-bs-target", "#myModal");

    button.addEventListener("click", function (e) {
      printReceta(element);

      function handleRemoveFavorite(e) {
        let datosArray = JSON.parse(localStorage.getItem("favoritos")) || [];

        // Filtra el array para excluir el elemento a eliminar
        datosArray = datosArray.filter((receta) => {
          console.log(receta.strMeal);
          return receta.strMeal !== element.strMeal;
        });
        console.log(datosArray);

        // Guarda el nuevo array en localStorage
        localStorage.setItem("favoritos", JSON.stringify(datosArray));
      }

      btn.addEventListener("click", handleRemoveFavorite);

      document
        .querySelector("#myModal")
        .addEventListener("hidden.bs.modal", () => {
          btn.removeEventListener("click", handleRemoveFavorite);
        });
    });
  }
}

printFavs(datos);

function printReceta(recetas) {
  title.textContent = recetas.strMeal;
  instrucciones.innerHTML = recetas.strInstructions;

  for (let i = 1; i < 20; i++) {
    const currentProperty = `strIngredient${i}`;
    const currentQuantity = `strMeasure${i}`;

    const ingredienteValue = recetas[currentProperty];
    const quantityValue = recetas[currentQuantity];

    const ingredienteEl = document.createElement("li");
    ingredienteEl.classList.add("list");
    ingredienteEl.innerHTML = `${ingredienteValue}-${quantityValue}`;
    instrucciones.appendChild(ingredienteEl);

    if (!ingredienteValue) {
      ingredienteEl.remove();
    }
  }
}
