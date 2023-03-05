
// Ejercicio 1 de clase
//Solicitar al usuario que ingrese un número positivo, y mostrar en un alert, "cuántos números hay que son pares".

/*

var num = parseInt(prompt(" Por favor ingresa un número positivo y te diremos cuantos números pares hay: "));

var contador = 0;

for (var i = 1; i <= num; i++) {
  if (i % 2 == 0) {
    contador++;
  }
}
alert("Hay " + contador + " números pares");


//Ejercicio 2 de clase

var num2 = parseInt(prompt(" Por favor ingresa un número positivo: "));

for (var i = 1; i <= 10; i++) {
  console.log((num2 + "x" + i + "=") + num2 * i);
}


//también aparte del alert, consolelog puedo mostrar con document.write

document.write("<h1>Hola Mundo!</h1>");

//contador decremental

for (var i = 10; i >= 10; i--) {
  alert(i);
}

*/

//Ejercicio 3: Mostrar con document.write un h2 los números del 10 al 0 y finalmente un msj que diga despegue!!.

/*

for (var i = 10; i >= 0; i--) {
  document.write("<h2>" + i + "</h2>");
}

document.write("<h2>¡Despegue!</h2>");

*/

/*
var i = 0;

while (i < 10) {
  console.log("Hola Mundo" + i);
  i++;
}

*/

//Ejercicio While

var num = parseInt(prompt(" Por favor ingresa un número positivo y te diremos cuantos números pares hay: "));

var i=0;
var counter=0;

while (i < num) {
  i++;

  if (i % 2 == 0) {
    counter++;
  }
}
alert("hay " + counter + " números pares");



/*

//do while

var i = 0;

do{
  console.log("DO / WHILE - Hola Mundo" + i);
  i++;
}while(i<10);

*/