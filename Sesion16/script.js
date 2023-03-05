//Switch case, el brake sirve para que cuando el código encuentre la condición, ejecute lo que está dentro y no continue ejecutando los demás casos que hay hacía abajo, esto permite ser más óptimo al programa.

/*
var x = 10;

switch (x) {
    case 10:
        alert("El valor es 10");
        break;

    case 9:
        alert("El valor es 9");
        break;

    case 7:
        alert("El valor es 7");
        break;

    default:
        alert("El valor es otro número");
}

*/

/*
var calc = parseInt(prompt("Esta es una calculadora básica. Por favor ingrese un número para seleccionar que operación desea ejecutar. \n 1-Suma \n 2-Resta \n 3-Multiplicación \n 4-División  "));

var num1 = prompt("Por favor digite el primer número: ");
var num2 = prompt("Por favor digite el segundo número: ");

switch (calc) {
    case 1:
        var suma = parseFloat(num1) + parseFloat(num2);
        alert("El resultado de la suma es: " + suma);
        break;

    case 2:
        var rest = parseFloat(num1) - parseFloat(num2);
        alert("El resultado de la resta es: " + rest);
        break;

    case 3:
        var mult = parseFloat(num1) * parseFloat(num2);
        alert("El resultado de la multiplicación es: " + mult);
        break;

    case 4:
        if (num2 == 0) {
            alert("Error, división por 0");
        }
        else {
            var divi = parseFloat(num1) / parseFloat(num2);
            alert("El resultado de la división es: " + divi);
        }
        break;

    default:
        alert("Opción NO valida");
}

*/


//Ciclos for en js
//Inicialización, condición, contador o actualizador el actualizador tiene un atajo con ++ xejemplo i++.

/*
var i;

for (i = 0; i <= 5; i++) {
    alert("Hola" + i);
}

*/


//Ejercicio: Solicitar al usuario que ingrese un número, y mostrar X veces un mensaje de saludo.

var repeticion = parseInt(prompt("Por favor ingrese un número, el número que ingrese mostrará un mensaje el cual se repetirá acorde al número digitado: "));

var i;

for (i = 1; i <= repeticion; i++) {
    alert("Hola señor usuario" + i);
}