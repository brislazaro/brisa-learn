const administrarCitas = new Citas();
const ui = new UI(administrarCitas);

let editando = false;

const citaObj = {
  mascota: "",
  propietario: "",
  telefono: "",
  fecha: "",
  hora: "",
  sintomas: "",
};

function datosCita(e) {
  //  console.log(e.target.name) // Obtener el Input
  citaObj[e.target.name] = e.target.value;
}
