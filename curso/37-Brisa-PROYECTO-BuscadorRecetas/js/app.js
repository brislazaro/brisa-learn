const selectEl = document.querySelector(".form-select");
const result = document.querySelector("#resultado");
const title = document.querySelector(".modal-title-principal");
const body = document.querySelector(".text");
const spinner = document.querySelector(".spinner-border");
const modalContent = document.querySelector(".modal-body-content");

function printCategorias(datos) {
  for (let i = 0; i < datos.length; i++) {
    const category = datos[i];

    const opcion = document.createElement("option");
    opcion.text = category.strCategory;
    opcion.value = category.strCategory;
    selectEl.appendChild(opcion);
  }
}

const apiURL = `https://www.themealdb.com/api/json/v1/1/categories.php`;
let ingredientesURL = `https://themealdb.com/api/json/v1/1/lookup.php?i=52772`;

fetch(apiURL)
  .then((datos) => datos.json())
  .then((datos) => {
    if (datos.categories) {
      printCategorias(datos.categories);
    }
  });

selectEl.addEventListener("change", function (e) {
  const selectCategory = e.target.value;

  const mealsURL = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${selectCategory}`;

  fetch(mealsURL)
    .then((res) => res.json())
    .then((data) => {
      if (!data.meals) {
        // mostrar mensaje de no hay platos con esta categoria
        return;
      }

      printProducts(data.meals);
    });
});

function printProducts(products) {
  limpiarHTML();

  for (let i = 0; i < products.length; i++) {
    const element = products[i];

    const cartContainer = document.createElement("div");
    cartContainer.classList.add("col-md-4");
    result.appendChild(cartContainer);

    const cartMeal = document.createElement("div");
    cartMeal.classList.add("card", "mb-4");
    cartContainer.appendChild(cartMeal);

    const img = document.createElement("img");
    img.src = element.strMealThumb;
    img.classList.add("img");
    cartMeal.appendChild(img);

    const meal = document.createElement("p");
    meal.classList.add("name");
    meal.textContent = element.strMeal;

    cartMeal.appendChild(meal);

    const button = document.createElement("button");
    button.classList.add("my-button");
    button.innerHTML = "Ver receta";

    button.setAttribute("data-bs-toggle", "modal");
    button.setAttribute("data-bs-target", "#myModal");

    button.addEventListener("click", function (e) {
      visible();
      let id = element.idMeal;
      ingredientesURL = `https://themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
      fetch(ingredientesURL)
        .then((info) => info.json())
        .then((info) => {
          PrintReceta(info.meals[0]);
          oculto();
        });
    });

    cartMeal.appendChild(button);
  }
}

function limpiarHTML() {
  while (result.firstChild) {
    result.removeChild(result.firstChild);
  }
}

function PrintReceta(platillo) {
  title.innerHTML = platillo.strMeal;
  body.textContent = platillo.strInstructions;
}

function visible() {
  spinner.classList.remove("oculto");
  spinner.classList.add("visible");

  modalContent.classList.remove("oculto");
  modalContent.classList.add("visible");
}

function oculto() {
  spinner.classList.remove("visible");
  spinner.classList.add("oculto");
}
