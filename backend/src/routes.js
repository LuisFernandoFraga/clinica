const express = require("express");

const routes = express.Router();

const pacienteController = require('./controllers/pacienteController');

routes.post("/pacientes", pacienteController.create);
routes.get("/pacientes", pacienteController.index);

module.exports = routes;