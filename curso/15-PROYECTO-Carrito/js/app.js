const carrito = document.querySelector("#carrito");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
const listaCursos = document.querySelector("#lista-cursos");

cargarEventListener();
function cargarEventListener() {
  listaCursos.addEventListener("click", agregarCurso);
}

function agregarCurso(e) {
  e.preventDefault();
  if (e.target.classList.contains("agregar-carrito")) {
    const cursoSelecionado = e.target.parentElement.parentElement;
    leerDatosCursos(cursoSelecionado);
  }
}

function leerDatosCursos(curso) {
  console.log(curso);
}

const infoCurso = {
  imagen: curso.querySelector("img").src,
  titulo: curso.querySelector("h4").textContent,
  precio: curso.querySelector(".precio span").textContent,
};
