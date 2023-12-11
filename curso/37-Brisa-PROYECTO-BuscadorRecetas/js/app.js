const selectEl = document.querySelector(".form-select");
const result = document.querySelector("#resultado");

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
  // limpiar el html primero
  for (let i = 0; i < products.length; i++) {
    const element = products[i];

    const cartContainer = document.createElement("div");
    cartContainer.classList.add("col-md-4");
    result.appendChild(cartContainer);

    const cartMeal = document.createElement("div");
    cartMeal.classList.add("card", "mb-4");
    cartContainer.appendChild(cartMeal);

    const meal = document.createElement("p");

    meal.textContent = element.strMeal;
    cartMeal.appendChild(meal);
  }
}
