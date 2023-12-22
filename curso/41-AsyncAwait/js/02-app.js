function descargarClientes() {
  return new Promise((resolve, reject) => {
    const error = false;

    setTimeout(() => {
      if (!error) {
        resolve("El listado de clientes se descargo correctamente");
      } else {
        reject("Error en la conexion");
      }
    }, 3000);
  });
}

async function ejecutar() {
  try {
    const respuesta = await descargarClientes();
  } catch (error) {
    console.log(error);
  }
}
ejecutar();
