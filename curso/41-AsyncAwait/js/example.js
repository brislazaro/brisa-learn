const key = "41349536-034eb62f6662da54e42d5e1d7";

const apiURL = `https://pixabay.com/api/?key=${key}&q=footbal&image_type=photo`;

fetch(apiURL)
  .then((datos) => datos.json())
  .then((datos) => {
    console.log(datos.hits);
    printImages(datos.hits);
  });

// Necesito una funcion async

async function fetchResults() {
  const fetchResponse = await fetch(apiURL);
  const finalResponse = await fetchResponse.json();

  console.log(finalResponse);
}

function suma(n1, n2) {
  return n1 + n2;
}

const result = suma(4, 2);
