
const returnpage = document.getElementById("back2");

returnpage.addEventListener("click", atras);

function atras() {
  window.open("user2.html", "_self");
}

document.getElementById("myButton").addEventListener("click", function () {
  // Deshabilita el botón para evitar múltiples clics
  document.getElementById("myButton").disabled = true;

  // Agrega el spinner de Bootstrap al botón
  document.getElementById("myButton").innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Loading...';

  // Espera 5 segundos antes de abrir la nueva página
  setTimeout(function () {
    window.location.href = "https://www.google.com";
  }, 5000);
});

