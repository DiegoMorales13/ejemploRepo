
//Eventos no embebidos
// Event Listener - Manejador de eventos
/*

Los eventos embebidos ensucian el código ya que van en el archivo HTML, estos eventos in-line deben invocarse con la palabra on + el evento. Ej: onclick. Como alternativa se utilizan los event listener con el fin de manejar los eventos de manera externa, de este modo no se necesita la palabra "on". La sintáxis es crear la variable a manejar, luego de esto se usa la variable + "." + addEventListener + ("evento a utilizar" , function (){ acción cuando se cumpla el evento}).

Ej:

var boton = document.getElementById("btn");

boton.addEventListener("onmouse" , function(){
  alert("Te has posicionado sobre el botón");
});

*/

/*

var btn = document.getElementById("boton");

btn.addEventListener("click", function () {
  alert("Hola Mundo");
});

*/

/*

Solicitar al usuario que ingrese un número y decir por alert si el número es PAR o IMPAR.
El número debe solicitarse por input
Necesitamos: 1 input (number), 1 boton, 1 addEventListener

*/

/*

var dato_usu = document.getElementById("usuario");
var btn2 = document.getElementById("btn2");
var titulo = document.getElementById("titulo");
var reset = document.getElementById("reset");

btn2.addEventListener("click", function () {
  if (dato_usu.value % 2 == 0) {
    titulo.style.color = "blue";
    titulo.innerText = "Hola, el número ingresado es par";
  }
  else {
    titulo.style.color = "red";
    titulo.innerText = "Hola, el número ingresado es impar";
  }
});

reset.addEventListener("click",function(){
  location.reload();
  //otra alternativa
  dato_usu.value = "";
  titulo.innerText = "";
})

*/

/*

var text_usu = document.getElementById("usuario");
var titulo1 = document.getElementById("titulo1");
var titulo2 = document.getElementById("titulo2");
var titulo3 = document.getElementById("titulo3");
var titulo4 = document.getElementById("titulo4");
var titulo5 = document.getElementById("titulo5");

text_usu.addEventListener("input", function () {

  var text = text_usu.value;

  titulo1.innerText = text.toUpperCase();
  titulo1.style.color = "red";

  titulo2.innerText = text.toLowerCase();
  titulo2.style.color = "blue";

  titulo3.innerText = text;
  titulo3.style.color = "green";
  titulo3.style.fontStyle = "italic";


  titulo4.innerText = text;
  titulo4.style.color = "black";


  var alreves = "";

  for (var i = text.length - 1; i >= 0; i--) {
    alreves += text[i];
  }
  titulo5.innerText = alreves;
  titulo5.style.color = "gold";
});

*/


/*
Crear una calculadora básica, utilizando:
- 2 inputs
- 4 botones
- 1 h4
- funciones con parametros y return
- eventos (addEventListener)

*/

/*

var input1 = document.getElementById("numero1");
var input2 = document.getElementById("numero2");
var btn1 = document.getElementById("suma");
var btn2 = document.getElementById("rest");
var btn3 = document.getElementById("multi");
var btn4 = document.getElementById("divi");
var h4 = document.getElementById("resultado");

var a;
var b;

function peticion_nums() {
  a = parseFloat(input1.value);
  b = parseFloat(input2.value);
}

function sumas(num1, num2) {
  var total = num1 + num2;
  h4.innerText = "El resultado de la suma es: " + total;
  h4.style.color = "black";
}

function restas(num1, num2) {
  var total = num1 - num2;
  h4.innerText = "El resultado de la resta es: " + total;
  h4.style.color = "black";
}

function multiplicaciones(num1, num2) {
  var total = num1 * num2;
  h4.innerText = "El resultado de la multiplicación es: " + total;
  h4.style.color = "black";
}

function divisiones(num1, num2) {
  if (num2 == 0) {
    h4.innerText = "NO SE PUEDE DIVIDIR POR CERO";
    h4.style.color = "black";
  } else {
    var total = num1 / num2;
    h4.innerText = "El resultado de la división es: " + total;
    h4.style.color = "black";
  }
}


//Listeners

btn1.addEventListener("click", function () {
  peticion_nums();
  sumas(a, b);
});

btn2.addEventListener("click", function () {
  peticion_nums();
  restas(a, b);
});

btn3.addEventListener("click", function () {
  peticion_nums();
  multiplicaciones(a, b);
});

btn4.addEventListener("click", function () {
  peticion_nums();
  divisiones(a, b);
});

*/

/*

//agregar elementos a una tabla

var tabla = document.getElementById("tabla");
var btn = document.getElementById("add");
var miTabla = "";

btn.addEventListener("click", function () {

  //forma 1
  var fila = document.createElement("tr"); //crear una etiqueta "tr"
  var col = document.createElement("td");
  var dato = document.createTextNode("Este es un dato de prueba");

  col.appendChild(dato); //le agregamos un "hijo" a la columna
  fila.appendChild(col); //le agregamos un "hijo" a la fila

  tabla.appendChild(fila); //le agregamos a la tabla, una fila, que adentro tiene una columna con un dato

  //forma 2
  miTabla = miTabla + "<tr><td>Hola chicos como están</td></tr>";
  tabla.innerHTML = miTabla;
});

*/

/*

EJERCICIO

Se le solicita al usuario que ingrse:
- Nombre, Apellido, Email y Telefono
- Fecha
- Productos (cantidad, nombre del producto y precio)

Cuando haga click en un botón "Generar factura":
- mostrar todos los datos (ordenados), calculando el total a pagar


FACTURA

nombre apellido
email
telefono

fecha

CANT.  PRODUCTOS    PRECIO
1      Zapatilla    $100
3      Caramelos    $67

Total a pagar= $167

*/