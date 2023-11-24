class Cliente {
  constructor(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
  }

  mostrarInformacion() {
    return `Cliente: ${this.nombre} tu saldo es de: ${this.saldo}`;
  }

  static bienvenida() {
    return `Bienvenido al cajero`;
  }
}

const brisa = new Cliente("brisa", 400);
console.log(brisa.mostrarInformacion);
console.log("brisa");
console.log(Cliente.bienvenida);

const Cliente2 = class {};
