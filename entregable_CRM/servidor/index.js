const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

mongoose.connect("mongodb+srv://D_amg:damg1996!@cluster0.odpek8j.mongodb.net/mydatabase?retryWrites=true&w=majority")
  .then(() => {
    console.log("Conectado a la Base de Datos");
  })
  .catch((err) => {
    console.log("Error de conexión:", err);
  });

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", express.static(path.resolve("../cliente/")));

const ClienteModel = require("./models/cliente");
const ContactoModel = require("./models/contacto");

app.get("/", (req, res) => {
  res.sendFile(path.resolve("../cliente/index.html"));
});

app.get("/clientes", (req, res) => {
  res.sendFile(path.resolve("../cliente/clientes.html"));
});

app.get("/contacto", (req, res) => {
  res.sendFile(path.resolve("../cliente/contacto.html"));
});

app.get("/obtener_clientes", async (req, res) => {
  try {
    const clientes = await ClienteModel.find();
    res.send(clientes);
  } catch (error) {
    console.log("Error al obtener los clientes:", error);
    res.status(500).send("Error al obtener los clientes");
  }
});

app.get("/obtener_contactos", async (req, res) => {
  try {
    const contactos = await ContactoModel.find();
    res.send(contactos);
  } catch (error) {
    console.log("Error al obtener los contactos:", error);
    res.status(500).send("Error al obtener los contactos");
  }
});

app.post("/nuevo_cliente", async (req, res) => {
  try {
    const datosCliente = req.body;
    const nuevoCliente = new ClienteModel(datosCliente);
    await nuevoCliente.save();
    console.log("Nuevo cliente registrado:", nuevoCliente);
    res.send("Cliente registrado correctamente");
  } catch (error) {
    console.log("Error al registrar el cliente:", error);
    res.status(500).send("Error al registrar el cliente");
  }
});

app.post("/nuevo_contacto", async (req, res) => {
  try {
    const datosContacto = req.body;
    const nuevoContacto = new ContactoModel(datosContacto);
    await nuevoContacto.save();
    console.log("Nuevo contacto registrado:", nuevoContacto);
    res.send("Contacto registrado correctamente");
  } catch (error) {
    console.log("Error al registrar el contacto:", error);
    res.status(500).send("Error al registrar el contacto");
  }
});

app.listen(3000, () => {
  console.log("Servidor en ejecución en el puerto 3000");
});