const selectedRestaurant = "Mexican";

function printTitle(selectedRestaurant) {
  if (selectedRestaurant === "best") {
    return "The best Ranking 🏆";
  } else {
    return selectedRestaurant + "Food";
  }
}

printTitle();

const stars = document.querySelectorAll(".star");

stars.forEach(function (star, index) {
  star.addEventListener("click", function () {
    for (let i = 0; i <= index; i++) {
      stars[i].classList.add("checked");
    }
    for (let i = index + 1; i < stars.length; i++) {
      stars[i].classList.remove("checked");
    }
  });
});
