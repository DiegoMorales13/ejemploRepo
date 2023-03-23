
/*

//acceso a nodos

var parrafos = document.getElementsByTagName("p");

for (var i = 0; i < parrafos.length; i++) {
  console.log(parrafos[i].innerText);
  console.log(parrafos[i].innerHTML);
}


//mediante la propiedad name
var a = document.getElementsByName("parrafo1");

//mediante la propiedad ID

var b = document.getElementById("boton");

//mediante la clase

var c = document.getElementsByClassName("saludo");



function mostrar_mensaje() {
  var mostrar = document.getElementById("ingreso");
  alert(mostrar.value);
}

*/

/*
var atributos = document.getElementById("pruebilla");

atributos.className += "miClase";
atributos.style.color = "green";
atributos.innerHTML = "Hola, estamos hackeando la matrix!";

*/

//Ejercicio

/* Cuando el usuario haga click en el botón mostrar, deberá mostrar en un console log los datos que ingresó en los input nombre,apellido y edad.

*/


function mostrar_mensaje() {
  var nom = document.getElementById("name");
  var ape = document.getElementById("lastname");
  var edad = document.getElementById("age");
  console.log("Tu nombre es " + nom.value + " " + ape.value + " y tu edad es " + edad.value);
  alert("Tu nombre es " + nom.value + " " + ape.value + " y tu edad es " + edad.value);
}



