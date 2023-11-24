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

class Empresa extends Cliente {
  constructor(nombre, saldo, telefono, categoria) {
    super(nombre, saldo);
    this.telefono = telefono;
    this.categoria = categoria;
  }

  static bienvenida() {
    return `Bienvenido al cajero de Empresas`;
  }
}

const brisa = new Cliente("brisa", 400);
const empresa = new Empresa(
  "codigo con juan",
  500,
  567898,
  "aprendizaje en linea"
);
console.log(empresa.mostrarInformacion());
