

/* Variables en JS: Enteras-integer, Decimales-float, Cadenas de texto-string, se almacena
en comillas o simples o dobles, pero deben ser las mismas.
*/

/*
//Números o int

var iva = 10;
var total = 1000000;

//Cadenas de texto, puede ser en comila simple o doble

var nombre_producto = " Smart TV 55' ";
var name = 'Frutas y Verduras';


//Crear un script que muestre en un alert el resultado de la suma
// de dos variables creadas anteriormente

var num1 = 20;
var num2 = 30;
var suma = num1 + num2;
alert("La suma de los dos números es:" + suma);

//Datos Booleanos, son de tipo lógico y almacena solo dos posibles valores, (true o false)

var estado = true;
var vendido = false;

//Funciones útiles para cadenas de texto
//length para que devuelva el número de carácteres de un string

var texto = "Hola, ¿cómo estás?";
var cantidad = texto.length;
alert(cantidad);

//concatenar

var nombre = "Emiliano";
var apellido = "Chiappero";
var nombre_completo = nombre + " " + apellido + " ese soy yo";
alert(nombre_completo);

//Ejercicio Concatenar

var nombre = "Diego";
var apellido = "Morales";
var signoZ = "Leo";
var info = "Mi nombre es" + " " + nombre + " " + apellido + " y mi signo zodiacal es " + signoZ;
alert(info);
alert("La longitud de mi texto es:" + " " + info.length);

*/

/*
//Mayúsculas y Minúsculas con funciones

var mascota = "perro";
alert(mascota.toUpperCase());

var color = "VERDE";
alert(color.toLocaleLowerCase());


//ejercicio upper y lower

var nombre = "diego";
var apellido = "morales";
var nombre_completo = nombre.toUpperCase() + " " + apellido.toUpperCase();
alert(nombre_completo);

var nombre = "DIEGO";
var apellido = "MORALES";
var nombre = nombre.toLowerCase() + " " + apellido.toLowerCase();
alert(nombre);

var nombre = "diego";
var apellido = "MORALES";
var na = nombre.toUpperCase() + " " + apellido.toLowerCase();
alert(na);

*/
/*
//prompt-ventana donde puedo ingresar textos, similar a un input

var color_usuario = prompt("Por favor ingrese su color favorito");
alert("Su color favorito es: " + color_usuario.toUpperCase());
*/

//Operaciones aritméticas: + suma - resta * multiplicación / división

//ParseInt (Parse es convertir, en este caso sería convertir a entero, convierte el string o cadena de texto ingresada a un número entero)

/*
var num = prompt("ingrese número");
alert(parseInt(num) + 10);
*/

var num1 = prompt("Esta es una calculadora básica. Por favor ingrese un número ");
var num2 = prompt("Por favor ingrese otro número");
var suma = parseFloat(num1) + parseFloat(num2);
var rest = parseFloat(num1) - parseFloat(num2);
var mult = parseFloat(num1) * parseFloat(num2);

if (num2 == 0) {
    alert("Error, división por 0");
}
else {
    var divi = parseFloat(num1) / parseFloat(num2);
    alert("El resultado de la división es: " + divi);
}

alert("El resultado de la suma es: " + suma);
alert("El resultado de la resta es: " + rest);
alert("El resultado de la multiplicación es: " + mult);

