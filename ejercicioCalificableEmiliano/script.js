// Ejercicio 1 - Crear un programa donde el usuario ingrese en un prompt la temperatura en grados Celcius y el programa muestre en una alert la temperatura en grados Fahrenheit.

var temp_celsius = parseFloat(prompt(" Este es un conversor de temperatura de grados Celsius a grados Fahrenheit, por favor ingrese un valor de temperatura: "));

var temp_Fahrenheit = (temp_celsius * 1.38) + 32;
alert("Acorde al valor ingresado el resultado son: " + temp_Fahrenheit + " °F");


// Ejercicio 2 - El usuario ingresa un número, se pide crear la siguiente pirámide (console.log) hasta dicho número ingresado. Ej: numero ingresado = 5

var num = parseInt(prompt("Si te gustan las matemáticas y la estadística, este programa es para ti. Ingresa un número entero y te mostraremos como se comporta una distribución normal. "));

var asterisco = " ";

for (var i = 1; i <= num; i++) {
  asterisco += "*";
  console.log(asterisco);
}

for (var j = num - 1; j >= 1; j--) {
  var asterisco2 = " ";
  for (var k = 1; k <= j; k++) {
    asterisco2 += "*";
  }
  console.log(asterisco2);
}


// Ejercicio 3 - Según un numero ingresado por el usuario, calcular su factorial.

var user_num = parseInt(prompt("Esta es una aplicación que calcula el factorial de un número. Por favor, ingrese un número entero y le devolveremos el resultado correspondiente. "));

var factorial = 1;

for (var i = 1; i <= user_num; i++) {
  factorial *= i;
}

alert("El resultado de " + user_num + " factorial " + " es: " + factorial);


// Ejercicio -4 ATM (cajero automático)

var dinero_inic = 1500000;
var ultRetiro = 0;
var ultDeposito = 0;

var opcion = '';

while (opcion != "5") {
  console.log('Bienvenido a BanConfianza, por favor seleccione una opción de nuestro menú:');
  console.log('1. Retiros');
  console.log('2. Depositos');
  console.log('3. Consultar Saldo');
  console.log('4. Ver Resumen de Movimientos');
  console.log('5. Salir');

  opcion = prompt('Por favor ingrese una opción:');

  switch (opcion) {
    case '1':
      var cantidadRetiro = parseInt(prompt('Ingrese la cantidad a retirar:'));

      if (cantidadRetiro <= 0 || cantidadRetiro > dinero_inic) {
        console.log('Cantidad inválida o saldo insuficiente.');
      } else {
        dinero_inic -= cantidadRetiro;
        ultRetiro = cantidadRetiro;

        console.log('Se ha retirado $' + cantidadRetiro + ' de su cuenta.');
      }
      break;

    case '2':
      var cantidadDepositar = parseInt(prompt('Ingrese la cantidad a depositar:'));

      if (cantidadDepositar <= 0) {
        console.log('Cantidad inválida.');
      } else {
        dinero_inic += cantidadDepositar;
        ultDeposito = cantidadDepositar;

        console.log('Se ha depositado $' + cantidadDepositar + ' en la cuenta.');
      }
      break;

    case '3':
      console.log('El saldo actual es de $' + dinero_inic);
      break;

    case '4':
      console.log('Sus Últimos movimientos son:');
      if (ultRetiro > 0) {
        console.log(' - Extraido: $' + ultRetiro);
      }
      if (ultDeposito > 0) {
        console.log(' - Depositado: $' + ultDeposito);
      }
      break;

    case '5':
      console.log('Gracias por utilizar nuestro servicio.');
      break;

    default:
      console.log('Opción inválida.');
      break;
  }
}


// Ejercicio 5 - Fibonacci. Según un número ingresado por el usuario, mostrar la secuencia de Fibonacci hasta esa cantidad de veces. Ej: el usuario ingresa el 8, mostrar: 0 1 1 2 3 5 8 13 21 34.


var input_num = parseInt(prompt("Ingresa un número para calcular su secuencia de Fibonacci:"));

var num_init = 0;
var num2_init = 1;

console.log("La secuencia de Fibonacci de " + input_num + " es:");

for (var i = 0; i <= input_num; i++) {
  console.log(num_init);
  var result = num_init + num2_init;
  num_init = num2_init;
  num2_init = result;
}



