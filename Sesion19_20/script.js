// arrays

/*
var dia1 = "Lun";
var dia2 = "Mar";
var dia3 = "Mie";
var dia4 = "Jue";
var dia5 = "Vie";
var dia6 = "Sáb";
var dia7 = "Dom";

var i = "alo";

var array2 = [2, 4, 6];

var dias = ["Lun", "Mar", "Mie", "Jue", "Vie", "Sab", "Dom", i, true, array2];

console.log (dias[3]);

*/

//ejercicio clase

/*
Según un número ingresado por el usuario, ir solicitando valores (texto o números), ej el usuario ingresa 4.
Me pide cuatro veces distintas que ingrese un valor texto o número y a esos 4 datos.
*/

/*

var dato = parseInt(prompt("Ingrese un número"));
var array = [];

for(var i=0; i<dato;i++){
  array[i] = prompt("Ingrese un dato");
}

*/

//Clase 07 marzo

/*

var cantidad = parseInt(prompt("¿Cuantos valores desea ingresar?."));
var valores = [];

for ( var i = 0; i < cantidad; i++)
{
  valores[i] = parseInt(prompt("Por favor ingrese los valores a guardar"));
}

var value_find = parseInt(prompt("¿Qué valor desea buscar?"));

var encontrado = false;

for (var j = 0; j < valores.length; j++) {
    if( valores[j] == value_find) {
        encontrado = true;
    } 
}

if (encontrado == true) {
    alert("El valor: " + value_find + " está en la lista ingresada");
} else {
    alert("El valor: " + value_find + " No se encuentra en la lista ingresada");
}


// Ejercicio frutas

var manzanas = 0;
var peras = 0;
var naranjas = 0;
var menu = 0;

while (menu !== 4) {
  console.log("Selecciona una opción para agregar la fruta:");
  console.log("1. Ingresar Manzana");
  console.log("2. Ingresar Pera");
  console.log("3. Ingresar Naranja");
  console.log("4. Salir");

  menu = parseInt(prompt("Ingrese su selección"));

  switch (menu) {
    case 1:
      manzanas++;
      break;
    case 2:
      peras++;
      break;
    case 3:
      naranjas++;
      break;
    case 4:
      console.log('Cantidad de Manzanas: ' + manzanas);
      console.log('Cantidad de Peras: ' + peras);
      console.log('Cantidad de Naranjas: ' + naranjas);
      console.log('¡Chau!');
      break;
    default:
      console.log("Opción inválida, intente de nuevo.");
  }
}

*/

var nombresPL = [];
var temasPL = [];

while (menuPL != 5) {

  var menuPL = parseInt(prompt("Por favor seleccione una de las opciones del menú: \n 1 - Crear Playlist \n 2 - Agregar canciones a la PlayList creada \n 3 - Ver tus PlayList \n 4 - Buscar canción en tus PlayList \n 5 - Salir"));

  switch (menuPL) {
    case 1:
      var nombrePL = prompt("Escriba como quiere que se llame su PlayList");
      nombresPL[nombresPL.length] = nombrePL;
      break;

    case 2:
      var inputSongs = parseInt(prompt("¿Cuántas canciones quieres añadir a tu PlayList?"));
      var playlist = [];
      for (i = 1; i <= inputSongs; i++) {
        playlist[playlist.length] = prompt("Agrega la canción #" + i);
      }
      temasPL[temasPL.length] = playlist;
      break;

    case 3:
      var output = "";
      for (var i = 0; i < nombresPL.length; i++) {
        output += "Tu PlayList " + nombresPL[i] + " contiene las siguientes canciones: \n";
        for (var j = 0; j < temasPL[i].length; j++) {
          output += "-" + temasPL[i][j] + "\n";
        }
      }
      alert(output);
      break;

    case 4:
      var song_find = prompt("¿Qué canción buscas?");
      var encontrado = false;
      for (var i = 0; i < temasPL.length; i++) {
        for (var j = 0; j < temasPL[i].length; j++) {
          if (temasPL[i][j] == song_find) {
            encontrado = true;
          }
        }
      }
      if (encontrado == true) {
        alert("La canción que buscas: " + song_find + " está dentro de tus PlayList");
      } else {
        alert("La canción que buscas: " + song_find + " No se encuentra en tus PlayList");
      }
      break;

    case 5:
      alert("¡Gracias por visitarnos, regresa pronto!");
      break;

    default:
      alert("Opción NO valida, intente de nuevo");
      break;
  }
}