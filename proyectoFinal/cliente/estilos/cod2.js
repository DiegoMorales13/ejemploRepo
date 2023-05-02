
const btnRegresarPagina = document.getElementById("back");

btnRegresarPagina.addEventListener("click", volver);

function volver() {
  window.open("index.html", "_self");
}

const btnDiligenciar = document.getElementById('btn-diligenciar');

btnDiligenciar.addEventListener('click', () => {
  const selectExamen = document.getElementById('select-examen');
  const selectedOption = selectExamen.options[selectExamen.selectedIndex].value;

  if (selectedOption === 'uroanalisis') {
    window.open("uroanalisis.html", "_self");
  }
});