const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema({
  name: String,
  country: String,
  email: String,
  date: String,
  phone: String,
});

module.exports = mongoose.model("Clientes", clienteSchema);