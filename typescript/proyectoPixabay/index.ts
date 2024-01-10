document.addEventListener("DOMContentLoaded", function () {
  const busqueda = document.querySelector("#termino") as HTMLInputElement;
  const buscarBtn = document.querySelector("#button");
  const result = document.querySelector("#resultado");

  const apiKey = "41349536-034eb62f6662da54e42d5e1d7";
  let valor = busqueda.value;

  function printResult() {
    if (valor === "") {
      alert("Añade un termino de busqueda");
    } else {
      valor = valor.replaceAll(" ", "+");
      const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${valor}&image_type=photo`;
      const card = document.createElement("div");
      result?.appendChild(card);

      const resultPrint = document.createElement("p");
      resultPrint.innerHTML = busqueda.value;
      card.appendChild(resultPrint);
    }
  }

  buscarBtn?.addEventListener("click", function (e) {
    e.preventDefault();
    printResult();
  });
});
