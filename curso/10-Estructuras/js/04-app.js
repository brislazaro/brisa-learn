const dinero = 300;
const totalAPagar = 500;
const tarjeta = true;

if (dinero >= totalAPagar) {
  console.log("si podemos pagar");
} else if (tarjeta) {
  console.log("si puedo pagar");
} else {
  console.log("fondos insuficientes");
}
