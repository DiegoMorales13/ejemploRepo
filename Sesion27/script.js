// Obtener la lista de tareas desde localStorage
var tareas = [];
if(localStorage.getItem('tareas')) {
  var tareasString = localStorage.getItem('tareas');
  var tareasArray = tareasString.split(';');
  for(var i=0; i<tareasArray.length; i++) {
    var tareaString = tareasArray[i];
    if(tareaString !== '') {
      var tarea = tareaString.split(',');
      tareas.push({titulo: tarea[0], descripcion: tarea[1]});
    }
  }
}

// Obtener los elementos del DOM necesarios
var tituloInput = document.getElementById('titulo');
var descripcionInput = document.getElementById('descripcion');
var listaTareas = document.getElementById('listaTareas');

// Función para agregar una tarea a la lista
function agregarTarea() {
  // Obtener los valores de los inputs
  var titulo = tituloInput.value;
  var descripcion = descripcionInput.value;

  // Validar que se haya ingresado un título
  if (!titulo) {
    alert('Por favor ingrese un título para la tarea.');
    return;
  }

  // Crear la tarea y agregarla a la lista
  var tarea = { titulo: titulo, descripcion: descripcion };
  tareas.push(tarea);
  guardarTareas();
  mostrarTareas();

  // Limpiar los inputs
  tituloInput.value = '';
  descripcionInput.value = '';
}

// Función para mostrar las tareas en la lista
function mostrarTareas() {
  // Limpiar la lista
  listaTareas.innerHTML = '';

  // Agregar cada tarea a la lista
  for (var i = 0; i < tareas.length; i++) {
    var tarea = tareas[i];
    var li = document.createElement('li');
    li.textContent = tarea.titulo + ' - ' + tarea.descripcion;
    listaTareas.appendChild(li);
  }
}

// Función para guardar la lista de tareas en localStorage
function guardarTareas() {
  var tareasString = '';
  for(var i=0; i<tareas.length; i++) {
    var tarea = tareas[i];
    var tareaString = tarea.titulo + ',' + tarea.descripcion;
    if(i < tareas.length - 1) {
      tareaString += ';';
    }
    tareasString += tareaString;
  }
  localStorage.setItem('tareas', tareasString);
}

// Mostrar las tareas al cargar la página
mostrarTareas();

//esto indica que iniciamos  jquery

$(document).ready(function(){
// todo lo que vaya aquí se ejecuta SOLO cuando el document o arbol esté listo
});