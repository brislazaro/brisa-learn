const metodoPago = "efectivo";

switch (metodoPago) {
  case "efectivo":
    console.log(`pagaste con ${metodoPago}`);
    break;
  default:
    console.log("aun no has seleccionado metodo de pago");
    break;
}
