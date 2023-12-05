const aplicarDescuento = new Promise((resolve, reject) => {
  const descuento = true;
  if (descuento) {
    resolve("descuento aplicado");
  } else {
    reject("no se aplico descuento");
  }
});

console.log(aplicarDescuento);

aplicarDescuento
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  });

console.log(1);
console.log(2);
