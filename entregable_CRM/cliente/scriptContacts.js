$(document).ready(function () {
  init();

  $("#contact_form").submit(function (e) {
    e.preventDefault();
    let data = $(this).serialize();

    $.ajax({
      url: "http://localhost:3000/new_contact",
      method: "post",
      data: data,
      success: function (response) {
        alert(response);
        window.location.href = "http://localhost:3000/contact"
      },
    });
  });

  function init() {
    get_data("http://localhost:3000/get_customers", build_options);
    get_data("http://localhost:3000/get_contacts", build_table);
  }

  function get_data(url, callback) {
    $.ajax({
      url: url,
      method: "get",
      success: function (response) {
        console.log(response);
        callback(response);
      },
    });
  }

  function build_options(data) {
    let options = data.map(item => `<option value="${item.name}">${item.name}</option>`).join("");
    $("#customers").append(options);
  }

  function build_table(data) {
    if (data.length == 0) {
      $("#message").text("There are no contacts registered");
      $("#contact_table").hide();
      return;
    }

    $("#message").text("Registered Contacts");
    $("#contact_table").show();

    let header = "<thead><th>#</th><th>Date</th><th>Name</th><th>Description</th><th>Status</th><th>Type</th></thead>";

    let tableRows = data.map((item, index) => {
      let row = `<tr><td>${index + 1}</td><td>${item.date}</td><td>${item.name}</td><td>${item.description}</td><td>${item.status}</td><td>${item.type}</td></tr>`;
      return row;
    }).join("");

    let table = `<table>${header}<tbody>${tableRows}</tbody></table>`;
    $("#contact_table").html(table);
  }
});
