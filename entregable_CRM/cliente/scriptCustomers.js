$(document).ready(function () {
  fetch_clients();

  $("#form_cliente").submit(function (e) {
    e.preventDefault();
    let data = $(this).serialize();
    $.ajax({
      url: "http://localhost:3000/nuevo_cliente",
      method: "post",
      data: data,
      success: function (response) {
        alert(response);
        window.location.href = "http://localhost:3000/clientes";
      },
    });
  });

  function fetch_clients() {
    $.get("http://localhost:3000/obtener_clientes", function (response) {
      console.log(response);
      build_table(response);
    });
  }

  function build_table(data) {
    let mensaje = data.length == 0 ? "No hay ningún cliente registrado" : "Clientes registrados";
    $("#mensaje").text(mensaje).toggle(data.length > 0);

    let header = "<thead><th>#</th><th>Fecha</th><th>País</th><th>Nombre</th><th>Correo</th><th>Teléfono</th></thead>";
    let rows = data.map(function (cliente, index) {
      let td_inicio = "<td>", td_fin = "</td>", tr_inicio = "<tr>", tr_fin = "</tr>";
      return `${tr_inicio}${td_inicio}${index + 1}${td_fin}${td_inicio}${cliente.fecha}${td_fin}${td_inicio}${cliente.pais}${td_fin}${td_inicio}${cliente.nombre}${td_fin}${td_inicio}${cliente.correo}${td_fin}${td_inicio}${cliente.telefono}${td_fin}${tr_fin}`;
    });

    let tabla = header + "<tbody>" + rows.join("") + "</tbody>";
    $("#tabla").empty().append(tabla);
  }
});