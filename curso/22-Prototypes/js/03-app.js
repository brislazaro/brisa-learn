function cliente(cliente, saldo) {
  this.nombre = nombre;
  this.saldo = saldo;
}

cliente.prototype.tipoCliente = function () {
  let tipo;

  if (this.saldo > 10000) {
    tipo = "gold";
  } else if (this.saldo > 5000) {
    tipo = "platinum";
  } else {
    tipo = "normal";
  }
  return tipo;
};

const pedro = new cliente("pedro", 6000);
pedro.tipoCliente();

function empresa(nombre, saldo, categoria) {
  this.nombre = nombre;
  this.saldo = saldo;
  this.categoria = categoria;
}

const CCJ = new empresa(`Codigo con Juan`);
