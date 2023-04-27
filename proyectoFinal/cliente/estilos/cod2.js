
const btnRegresarPagina = document.getElementById("back");

btnRegresarPagina.addEventListener("click", volver);

function volver() {
  window.open("index.html", "_self");
}
