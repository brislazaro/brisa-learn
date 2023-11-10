const selectedRestaurant = "Mexican";

function printTitle(selectedRestaurant) {
  if (selectedRestaurant === "best") {
    return "The best Ranking 🏆";
  } else {
    return selectedRestaurant + "Food";
  }
}

printTitle();

// filtrar los restaurantes segun el tipo
const filteredRestaurants = restaurants.filter(
  (restaurant) => restaurant.type === selectedRestaurant
);

function printRestaurants() {
  for (let i = 0; i < filteredRestaurants.length; i++) {
    const element = filteredRestaurants[i];

    const cardRest = document.querySelector(".list-container");

    const containerEl = document.createElement("li");
    containerEl.classList.add("container-restaurant");
    cardRest.appendChild(containerEl);

    const logoEl = document.createElement("img");
    logoEl.classList.add("logo");
    logoEl.src = element.logo;
    logoEl.alt = "hola";

    containerEl.appendChild(logoEl);

    const nameEl = document.createElement("p");
    nameEl.innerHTML = element.nombre;

    containerEl.appendChild(nameEl);

    const typeEl = document.createElement("p");
    typeEl.innerHTML = element.type;

    containerEl.appendChild(typeEl);

    const starsContainerEl = document.createElement("div");
    starsContainerEl.classList.add("rating");

    containerEl.appendChild(starsContainerEl);

    for (let index = 0; index < 5; index++) {
      const starEl = document.createElement("i");
      starEl.classList.add("star", "bi", "bi-star-fill");

      starEl.addEventListener("click", () => {
        for (let i = 0; i <= index; i++) {
          starsContainerEl.children[i].classList.add("checked");
        }
        for (let i = index + 1; i < starsContainerEl.children.length; i++) {
          starsContainerEl.children[i].classList.remove("checked");
        }
      });

      starsContainerEl.appendChild(starEl);
    }
  }
}

printRestaurants();
