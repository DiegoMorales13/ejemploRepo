
//Arrays para guardar productos y generar total de los datos
var cantidades = [];
var productos = [];
var precios = [];
var total = 0;

// Selecciona el botón "Agregar Producto"
var btnAdd = document.getElementById('btn_add');

// Selecciona el contenedor de la tabla
var tabla = document.getElementById('tabla');

// Agrega un evento de clic al botón "Agregar Producto"
btnAdd.addEventListener('click', function () {

  // Crea un nuevo elemento div para contener los nuevos inputs
  var nuevaFila = document.createElement('div');
  nuevaFila.classList.add('input-group');

  // Crea los nuevos inputs
  var cantidadInput = document.createElement('input');
  cantidadInput.type = 'number';
  cantidadInput.classList.add('form-control');
  cantidadInput.setAttribute('placeholder', '-Cantidad-');
  cantidadInput.setAttribute('min', '1');

  var nombreInput = document.createElement('input');
  nombreInput.type = 'text';
  nombreInput.classList.add('form-control');
  nombreInput.setAttribute('placeholder', '-Nombre del Producto-');

  var precioInput = document.createElement('input');
  precioInput.type = 'number';
  precioInput.classList.add('form-control');
  precioInput.setAttribute('placeholder', '-Precio-');
  precioInput.setAttribute('min', '0');

  // Agrega los nuevos inputs al nuevo elemento div
  nuevaFila.appendChild(cantidadInput);
  nuevaFila.appendChild(nombreInput);
  nuevaFila.appendChild(precioInput);

  // Agrega el nuevo elemento div a la tabla
  tabla.appendChild(nuevaFila);

  // Guarda los datos en los arrays correspondientes
  
});

//Función para traer los datos principales de la factura

var generarFact = document.getElementById('generarFact');
var nombre = document.getElementById('name');
var apellido = document.getElementById('lastname');
var correo = document.getElementById('email');
var telefono = document.getElementById('phone');
var fecha = document.getElementById('date');
var titu0 = document.getElementById('titu0');
var titu1 = document.getElementById('titu1');
var titu2 = document.getElementById('titu2');
var titu3 = document.getElementById('titu3');
var titu4 = document.getElementById('titu4');
var titu5 = document.getElementById('titu5');
var titu6 = document.getElementById('titu6');
var titu7 = document.getElementById('titu7');
var titu8 = document.getElementById('titu8');
var titu9 = document.getElementById('titu9');

generarFact.addEventListener("click", function () {

  var nombres = nombre.value;
  var apellidos = apellido.value;
  var correos = correo.value;
  var telefonos = telefono.value;
  var datos_cust = "Datos del Cliente";
  var fechas = fecha.value;
  var items_cust = "Items adquiridos por el cliente:";

  titu0.innerText = datos_cust;
  titu0.style.color = "black";

  titu1.innerText = nombres;
  titu1.style.color = "darkblue";
  titu1.style.fontStyle = "italic";

  titu2.innerText = apellidos;
  titu2.style.color = "darkblue";
  titu2.style.fontStyle = "italic";

  titu3.innerText = correos;
  titu3.style.color = "darkblue";
  titu3.style.fontStyle = "italic";

  titu4.innerText = telefonos;
  titu4.style.color = "darkblue";
  titu4.style.fontStyle = "italic";

  titu5.innerText = "Fecha de compra: " + fechas;
  titu5.style.color = "darkblue";
  titu5.style.fontStyle = "italic";

  titu6.innerText = items_cust;
  titu6.style.color = "green";
  titu6.style.fontStyle = "italic";

  titu7.innerText = cantidades;
  titu7.style.color = "black";
  titu7.style.fontStyle = "italic";

  titu8.innerText = productos;
  titu8.style.color = "black";
  titu8.style.fontStyle = "italic";

  titu9.innerText = precios;
  titu9.style.color = "black";
  titu9.style.fontStyle = "italic";
});


