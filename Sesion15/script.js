// if else

/*
var edad = parseInt(prompt("Por favor ingrese su edad"));

if (edad >= 18) {
    alert("Usted es mayor de edad");
}
else {
    alert("Usted es menor de edad");
}

*/

/*

//Ejercicio de clase

var mes = prompt("Por favor ingrese un mes del año (En letras o números)");

if (mes.toLowerCase() == "febrero" || mes == 2 || mes == 02) {
    alert("El mes tiene 28 días");
}
else {
    alert("El mes tiene más de 28 días");
}

*/

//Aninando if
/*
var mes = prompt("Ingrese un mes");

if(mes==2){
    alert("El mes tiene 28 días");
}else{
    if(mes=="febrero"){
        alert("El mes tiene 28 días");
    }else{
        if(mes=="feb"){
            alert("El mes tiene 28 días");
        }else{
            alert("El mes tiene más de 28 días");
        }
    }
}
*/

/*

//Otra forma

if (mes == 2) {
    alert("El mes tiene 28 días");
} else if (mes == "febrero") {
    alert("El mes tiene 28 días");
} else if (mes == "feb") {
    alert("El mes tiene 28 días");
} else {
    alert("El mes tiene más de 28 días");
}

*/

/*
Operadores Lógicos

OR / AND / NOT

OR ||
AND &&
NOT !
 tratar de en los or y and meter en paréntesis las condiciones (mes==febrero)||(mes==2)||(mes==02)
*/

//Módulo de un número en programación es con % por ejemplo 50 % 10 =0 ; 50 % 7 = 7,..... el módulo no es la división común, no es el resultado del cociente, si no del residuo, con el fin de saber si es o no divisible, si es 0 es divisible de lo contrario no lo es.

/*
alert("Ventana para verificar divisibilidad entre 2 números");

var num1 = parseFloat(prompt("Ingrese el primer número: "));
var num2 = parseFloat(prompt("Ingrese el segundo número: "));

if (num2 ==0){
    alert("NO ES posible dividir por cero")
}else if((num1) % (num2) == 0) {
    alert("El número 1 ES divisible entre el número 2");
}else{
    alert("El número 1 NO ES divisible entre el número 2");
}

*/

//ejercicio 2 clase

alert("¿Quieres saber si un color es primario? Digita uno a continuación y te diremos");

var col = prompt("Ingresa un color: ");

if ((col == "amarillo") || (col == "azul") || (col == "rojo")) {
    alert("El color digitado ES PRIMARIO");
} else {
    alert("El color digitado NO ES PRIMARIO o NO ES UN COLOR");
}

//ejercicio 3 clase

//Crear un programa que determine si un número introducido es divisible por 11 y 5

alert("¿Quieres saber si un número es divisible entre 11 y 5 ? Digitalo a continuación: ");

var num1 = parseFloat(prompt("Ingrese el número a dividir: "));

if ((num1 % 11 == 0) && (num1 % 5 == 0)) {
    alert("El número ingresado ES DIVISIBLE entre 11 y 5");
} else {
    alert("El número ingresado NO ES DIVISIBLE entre 11 y 5");
}

//ejercicio 4 clase

//Crear un programa que determine si el número ingresado es PAR o NO.
// (12 es par si ---> 12 % 2 = 0)

var par = parseFloat(prompt("Ingrese un número y le diremos SI ES par ó NO ES PAR"));

if(par % 2 ==0){
    alert("ES PAR");
} else{
    alert("NO ES PAR");
}