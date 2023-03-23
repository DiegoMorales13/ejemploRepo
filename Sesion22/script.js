//Retorno de parámetros

/*

function suma(a, b) {
  var total = a + b;

  return total;
}

var a = 10;
var b = 20;

var resultado = suma(a, b);
console.log(resultado);

*/


//Según un texto ingresado por el usuario crear 3 funciones:
/*
-Mayúsculas ( que reciba un parámetro y devuelva eso mismo en mayúsculas)
-Minúsculas ( que reciba un parámetro y lo devuelva en minúsculas)
-Mostrar ( que reciba un parámetro y muestre por consola eso mismo)
*/

function mayusculas(input_user) {
  return input_user.toUpperCase();
}

function minusculas(input_user) {
  return input_user.toLowerCase();
}

function mostrar(input_user) {
  console.log(input_user);
}

var opcion = 0;

while (opcion != 3) {
  var input_user = prompt("Por favor ingrese una palabra");
  opcion = parseInt(prompt("Elija una de las opciones: \n 1-Convertir a MAYÚSCULAS \n 2-Convertir a minúsculas \n 3-Salir"));

  switch (opcion) {
    case 1:
      input_user = mayusculas(input_user);
      mostrar(input_user);
      break;
    case 2:
      input_user = minusculas(input_user);
      mostrar(input_user);
      break;
    case 3:
      alert("Gracias, ¡adiós!");
      break;
    default:
      alert("opción no valida");
      break;
  }
}