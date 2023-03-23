
/*

//local storage me permite almacenar por más tiempo información de variables, ya que quedan en el disco duro
//su sintaxis es localStorage.setItem("edad",30);
// para recuperar el dato o traerlo es: localStorage.getItem("edad")

localStorage.setItem('edad',30);
variable_usu = localStorage.getItem('edad');

//para  eliminar el dato de la pc y que no consuma espacio y ponga lento el equipo es:

localStorage.removeItem('edad');


var num1 = 8;
localStorage.setItem("num2",8);

//obtener

console.log(num1);
console.log(localStorage.getItem("num2"));

*/
/*

//Variables para obtener los datos que corresponden a los botones
var btn_guardar = document.getElementById('save');
var btn_recuperar = document.getElementById('recovery');
var input1 = document.getElementById('name');
var input2 = document.getElementById('lastname');
var input3 = document.getElementById('address');
var input4 = document.getElementById('phone');
var sers = document.getElementById('series');
var titu1 = document.getElementById('h1');
var titu2 = document.getElementById('h2');
var titu3 = document.getElementById('h3');
var titu4 = document.getElementById('h4');
var titu5 = document.getElementById('h5');

//Evento que maneja el botón guardar
btn_guardar.addEventListener('click', function () {
  localStorage.setItem("input1", input1.value);
  localStorage.setItem("input2", input2.value);
  localStorage.setItem("input3", input3.value);
  localStorage.setItem("input4", input4.value);
  localStorage.setItem('sers',sers.value);
});

//Evento que maneja el botón recuperar
btn_recuperar.addEventListener('click', function () {
  titu1.innerText = localStorage.getItem("input1");
  titu2.innerText = localStorage.getItem("input2");
  titu3.innerText = localStorage.getItem("input3");
  titu4.innerText = localStorage.getItem("input4");
  titu5.innerText = localStorage.getItem('sers');
});

*/
