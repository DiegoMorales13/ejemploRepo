//Ejercicio clase
/*
Según un número ingresado por el usuario mostrar la suma de todos los números hasta dicho número,
en un console.log, hacerlo con for ; while y do-while
*/

/*
//For

var num = parseInt(prompt("Por favor ingrese un número para hacer la sumatoria: "));

var suma = 0;

for (var i = 1; i <= num; i++) {
  suma += i;

}

console.log(suma);

//while

while (i <= num) {
  suma += i
}

console.log(suma);


//do-while //corregir este para que de 55

var numero = parseInt(prompt("Ingresa un número: "));
var suma = 0;

do {
  suma += numero;
  numero--;
} while (numero > 0);

console.log(suma);

*/

//slice

/*
var texto = "Hola Mundo";
var palabra = texto.slice(5,8);
document.write(palabra);

*/

//Ejercicio clase

var texto = prompt("Por favor ingrese un texto y contaremos cuantas letras a mayúsculas o minúsculas tiene");

var contador = 0;

for (var i = 0; i <= texto.length; i++) {
  if (texto[i] == "a" || texto[i] == "A") {
    contador++;
  }
}
alert("La suma de letras -a- & -A- es: " + contador);


//Ejercicio 2

var texto2 = prompt("Ingrese un texto y se mostrará al revés");
var nuevoTexto = " ";

for (var i = texto2.length - 1; i >= 0; i--) {
  nuevoTexto += texto2[i];
}

alert(nuevoTexto);

