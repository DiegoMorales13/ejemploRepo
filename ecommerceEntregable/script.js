document.addEventListener('DOMContentLoaded', () => {

  // Variables
  const baseDeDatos = [
    {
      id: 1,
      nombre: 'Comprar Chokkan',
      precio: 5,
      imagen: '1.jpg'
    },
    {
      id: 2,
      nombre: 'Comprar Moyogi',
      precio: 2.5,
      imagen: '2.jpg'
    },
    {
      id: 3,
      nombre: 'Comprar Shakkan',
      precio: 7.5,
      imagen: '3.jpg'
    },
    {
      id: 4,
      nombre: 'Comprar Kengai',
      precio: 3.5,
      imagen: '4.jpg'
    }

  ];

  let carrito = [];
  const divisa = '€';
  const DOMitems = document.querySelector('#items');
  const DOMcarrito = document.querySelector('#carrito');
  const DOMtotal = document.querySelector('#total');
  const DOMbotonVaciar = document.querySelector('#boton-vaciar');
  const miLocalStorage = window.localStorage;

  // Funciones

  /**
  * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
  */
  function r_Productos() {
    baseDeDatos.forEach((info) => {
      // Estructura
      const miNodo = document.createElement('div');
      miNodo.classList.add('card', 'col-sm-4');
      // Body
      const miNodoCardBody = document.createElement('div');
      miNodoCardBody.classList.add('card-body');
      // Titulo
      const miNodoTitle = document.createElement('h5');
      miNodoTitle.classList.add('card-title');
      miNodoTitle.textContent = info.nombre;
      // Imagen
      const miNodoImagen = document.createElement('img');
      miNodoImagen.classList.add('img-fluid');
      miNodoImagen.setAttribute('src', info.imagen);
      // Precio
      const miNodoPrecio = document.createElement('p');
      miNodoPrecio.classList.add('card-text');
      miNodoPrecio.textContent = `${info.precio}${divisa}`;
      // Boton 
      const miNodoBoton = document.createElement('button');
      miNodoBoton.classList.add('btn', 'btn-primary');
      miNodoBoton.textContent = '+';
      miNodoBoton.setAttribute('marcador', info.id);
      miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
      // Insertamos
      miNodoCardBody.appendChild(miNodoImagen);
      miNodoCardBody.appendChild(miNodoTitle);
      miNodoCardBody.appendChild(miNodoPrecio);
      miNodoCardBody.appendChild(miNodoBoton);
      miNodo.appendChild(miNodoCardBody);
      DOMitems.appendChild(miNodo);
    });
  }

  /**
  * Evento para añadir un producto al carrito de la compra
  */
  function anyadirProductoAlCarrito(evento) {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(evento.target.getAttribute('marcador'))
    // Actualizamos el carrito 
    r_Carrito();
    // Actualizamos el LocalStorage
    guardarCarritoEnLocalStorage();
  }

  /**
  * Dibuja todos los productos guardados en el carrito
  */
  function r_Carrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach((item) => {
      // Obtenemos el item que necesitamos de la variable base de datos
      const miItem = baseDeDatos.filter((itemBaseDatos) => {
        // ¿Coincide las id? Solo puede existir un caso
        return itemBaseDatos.id === parseInt(item);
      });
      // Cuenta el número de veces que se repite el producto
      const numeroUnidadesItem = carrito.reduce((total, itemId) => {
        // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
        return itemId === item ? total += 1 : total;
      }, 0);
      // Creamos el nodo del item del carrito
      const miNodo = document.createElement('li');
      miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
      miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
      // Boton de borrar
      const miBoton = document.createElement('button');
      miBoton.classList.add('btn', 'btn-danger', 'mx-5');
      miBoton.textContent = 'X';
      miBoton.style.marginLeft = '1rem';
      miBoton.dataset.item = item;
      miBoton.addEventListener('click', borrarItemCarrito);
      // Mezclamos nodos
      miNodo.appendChild(miBoton);
      DOMcarrito.appendChild(miNodo);
    });
    // Renderizamos el precio total en el HTML
    DOMtotal.textContent = calcularTotal();
  }

  /**
  * Evento para borrar un elemento del carrito
  */
  function borrarItemCarrito(evento) {
    // Obtenemos el producto ID que hay en el boton pulsado
    const id = evento.target.dataset.item;
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
      return carritoId !== id;
    });
    // volvemos a renderizar
    r_Carrito();
    // Actualizamos el LocalStorage
    guardarCarritoEnLocalStorage();

  }

  /**
   * Calcula el precio total teniendo en cuenta los productos repetidos
   */
  function calcularTotal() {
    // Recorremos el array del carrito 
    return carrito.reduce((total, item) => {
      // De cada elemento obtenemos su precio
      const miItem = baseDeDatos.filter((itemBaseDatos) => {
        return itemBaseDatos.id === parseInt(item);
      });
      // Los sumamos al total
      return total + miItem[0].precio;
    }, 0).toFixed(2);
  }

  /**
  * Varia el carrito y vuelve a dibujarlo
  */
  function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    r_Carrito();
    // Borra LocalStorage
    localStorage.clear();

  }

  function guardarCarritoEnLocalStorage() {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
  }

  function cargarCarritoDeLocalStorage() {
    // ¿Existe un carrito previo guardado en LocalStorage?
    if (miLocalStorage.getItem('carrito') !== null) {
      // Carga la información
      carrito = JSON.parse(miLocalStorage.getItem('carrito'));
    }
  }

  // Eventos
  DOMbotonVaciar.addEventListener('click', vaciarCarrito);

  // Inicio
  cargarCarritoDeLocalStorage();
  r_Productos();
  r_Carrito();
});


//Código usando JQuery
/*
$(document).ready(() => {

  // Variables
  const baseDeDatos = [
    {
      id: 1,
      nombre: 'Comprar Chokkan',
      precio: 5,
      imagen: '1.jpg'
    },
    {
      id: 2,
      nombre: 'Comprar Moyogi',
      precio: 2.5,
      imagen: '2.jpg'
    },
    {
      id: 3,
      nombre: 'Comprar Shakkan',
      precio: 7.5,
      imagen: '3.jpg'
    },
    {
      id: 4,
      nombre: 'Comprar Kengai',
      precio: 3.5,
      imagen: '4.jpg'
    }
  ];

  let carrito = [];
  const divisa = '€';
  const DOMitems = $('#items');
  const DOMcarrito = $('#carrito');
  const DOMtotal = $('#total');
  const DOMbotonVaciar = $('#boton-vaciar');
  const miLocalStorage = window.localStorage;

  */

  // Funciones

  /*
  Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
  
  function r_Productos() {
    baseDeDatos.forEach((info) => {
      // Estructura
      const miNodo = $('<div>').addClass('card col-sm-4');
      // Body
      const miNodoCardBody = $('<div>').addClass('card-body');
      // Titulo
      const miNodoTitle = $('<h5>').addClass('card-title').text(info.nombre);
      // Imagen
      const miNodoImagen = $('<img>').addClass('img-fluid').attr('src', info.imagen);
      // Precio
      const miNodoPrecio = $('<p>').addClass('card-text').text(info.precio + divisa);
      // Boton 
      const miNodoBoton = $('<button>').addClass('btn btn-primary').text('+');
      miNodoBoton.attr('marcador', info.id);
      miNodoBoton.click(anyadirProductoAlCarrito);
      // Insertamos
      miNodoCardBody.append(miNodoImagen);
      miNodoCardBody.append(miNodoTitle);
      miNodoCardBody.append(miNodoPrecio);
      miNodoCardBody.append(miNodoBoton);
      miNodo.append(miNodoCardBody);
      DOMitems.append(miNodo);
    });
  }

  
  * Evento para añadir un producto al carrito de la compra
  
  function anyadirProductoAlCarrito(evento) {
    // Añadimos el Nodo a nuestro carrito
    carrito.push($(evento.target).attr('marcador'));
    // Actualizamos el carrito 
    r_Carrito();
    // Actualizamos el LocalStorage
    guardarCarritoEnLocalStorage();
  }

  
 * Dibuja todos los productos guardados en el carrito
 
function r_Carrito() {
  // Vaciamos todo el html
  $('#DOMcarrito').empty();
  // Quitamos los duplicados
  const carritoSinDuplicados = [...new Set(carrito)];
  // Generamos los Nodos a partir de carrito
  carritoSinDuplicados.forEach((item) => {
    // Obtenemos el item que necesitamos de la variable base de datos
    const miItem = baseDeDatos.filter((itemBaseDatos) => {
      // ¿Coincide las id? Solo puede existir un caso
      return itemBaseDatos.id === parseInt(item);
    });
    // Cuenta el número de veces que se repite el producto
    const numeroUnidadesItem = carrito.reduce((total, itemId) => {
      // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
      return itemId === item ? total += 1 : total;
    }, 0);
    // Creamos el nodo del item del carrito
    const miNodo = $('<li></li>')
      .addClass('list-group-item text-right mx-2')
      .text(`${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`);
    // Boton de borrar
    const miBoton = $('<button></button>')
      .addClass('btn btn-danger mx-5')
      .text('X')
      .css('marginLeft', '1rem')
      .attr('data-item', item)
      .on('click', borrarItemCarrito);
    // Mezclamos nodos
    miNodo.append(miBoton);
    $('#DOMcarrito').append(miNodo);
  });
  // Renderizamos el precio total en el HTML
  $('#DOMtotal').text(calcularTotal());
}


 * Evento para borrar un elemento del carrito
 
function borrarItemCarrito(evento) {
  // Obtenemos el producto ID que hay en el boton pulsado
  const id = $(evento.target).data('item');
  // Borramos todos los productos
  carrito = carrito.filter((carritoId) => {
    return carritoId !== id;
  });
  // volvemos a renderizar
  r_Carrito();
  // Actualizamos el LocalStorage
  guardarCarritoEnLocalStorage();
}


 * Calcula el precio total teniendo en cuenta los productos repetidos
 
function calcularTotal() {
  // Recorremos el array del carrito 
  return carrito.reduce((total, item) => {
    // De cada elemento obtenemos su precio
    const miItem = baseDeDatos.filter((itemBaseDatos) => {
      return itemBaseDatos.id === parseInt(item);
    });
    // Los sumamos al total
    return total + miItem[0].precio;
  }, 0).toFixed(2);
}


 * Varia el carrito y vuelve a dibujarlo
 
function vaciarCarrito() {
  // Limpiamos los productos guardados
  carrito = [];
  // Renderizamos los cambios
  r_Carrito();
  // Borra LocalStorage
  localStorage.clear();
}

function guardarCarritoEnLocalStorage() {
  miLocalStorage.setItem('carrito', JSON.stringify(carrito));
}

function cargarCarritoDeLocalStorage() {
  // ¿Existe un carrito previo guardado en LocalStorage?
  if (miLocalStorage.getItem('carrito') !== null) {
    // Carga la información
    carrito = JSON.parse(miLocalStorage.getItem('carrito'));
  }
}

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
cargarCarritoDeLocalStorage();
r_Productos();
r_Carrito();
});
*/