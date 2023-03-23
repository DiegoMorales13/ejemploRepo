
//Funciones

/*

function suma() {
  var num1 = parseInt(prompt("Ingrese un número"));
  var num2 = parseInt(prompt("Ingrese otro número"));
  var total = num1 + num2;
}

*/

/*
// dentro de los paréntesis van los parámetros, los que yo quiera n parámetros

function suma(num1, num2) {
  var total = num1 + num2;
  alert(total);
}

var a = parseInt(prompt("Ingrese el primero número:"));
var b = parseInt(prompt("Ingrese el segundo número:"));
suma(a,b);

*/

/*

function mensaje() {
  var name = prompt("Por favor ingresa tu nombre");
  alert("Bienvenido " + name);
}

mensaje();

*/

// Inicio calculadora con funciones
// Declaración de funciones

function suma(num1, num2) {
  var total = num1 + num2;
  alert("El resultado de la suma es: " + total);
}

function resta(num1, num2) {
  var total = num1 - num2;
  alert("El resultado de la resta es: " + total);
}

function multiplicacion(num1, num2) {
  var total = num1 * num2;
  alert("El resultado de la multiplicación es: " + total);
}

function division(num1, num2) {
  if (num2 == 0) {
    alert("Error, no es posible dividir por cero, ingrese un número diferente");
  } else {
    var total = num1 / num2;
    alert("El resultado de la división es: " + total);
  }
}

var a;
var b;

function peticion_nums() {
  a = parseFloat(prompt("Ingrese el primero número:"));
  b = parseFloat(prompt("Ingrese el segundo número:"));
}


// Inicio de menú llamando las funciones

while (menu != 5) {

  var menu = parseInt(prompt(" Calculadora de operaciones básicas. \n Por favor seleccione la acción que desea ejecutar. \n 1 - Suma \n 2 - Resta \n 3 - Multiplicación \n 4 - División \n 5 - Salir"));

  switch (menu) {

    case 1:
      peticion_nums();
      suma(a, b);
      break;

    case 2:
      peticion_nums();
      resta(a, b);

      break;

    case 3:
      peticion_nums();
      multiplicacion(a, b);

      break;

    case 4:
      peticion_nums();
      division(a, b);

      break;

    case 5:
      alert("Gracias, vuelva pronto");
      break;

    default:
      alert("Opción no valida, intente nuevamente");
      break;
  }
}