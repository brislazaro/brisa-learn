function descargarClientes() {
  return new Promise((resolve) => {
    console.log("Descargando clientes...");

    setTimeout(() => {
      resolve("Los clienes fueron descargados ");
    }, 5000);
  });
}

function descargarNuevosPedidos() {
  return new Promise((resolve) => {
    console.log("Descargando pedidos...");

    setTimeout(() => {
      resolve("Los pedidos fueron descargados");
    }, 3000);
  });
}

const app = async () => {
  try {
    const respuesta = await Promise.all([
      descargarClientes(),
      descargarNuevosPedidos(),
    ]);
  } catch (error) {
    console.log(error);
  }
};
app();
