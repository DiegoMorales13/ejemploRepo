const mongoose = require("mongoose");

const clienteSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  phone: {
    type: String,
    required: true,
    unique: true,
  },
});

const Cliente = mongoose.model("Cliente", clienteSchema);

module.exports = Cliente;
