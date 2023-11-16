const cardDiv = document.querySelector(".card");
const infoDiv = document.querySelector(".info");
const titulo = document.querySelector(".titulo");

cardDiv.addEventListener("click", () => {
  e.stopPropagation();
  console.log("click");
});

infoDiv.addEventListener("click", () => {
  e.stopPropagation();
  console.log("click en info");
});
