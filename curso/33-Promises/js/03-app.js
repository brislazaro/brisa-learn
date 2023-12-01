const aplicarDescuento = new Promise((resolve, reject) => {
  const descuento = true;
  if (descuento) {
    resolve("descuento aplicado");
  } else {
    reject("no se aplico descuento");
  }
});

aplicarDescuento
  .then((resultado) => {
    console.log(resultado);
  })
  .catch((error) => {
    console.log(error);
  });
