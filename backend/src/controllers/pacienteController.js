const connection = require("../database/connection");
const crypto = require("crypto");

module.exports = {
  async index(req, res) {
    const pacientes = await connection("pacientes").select("*");

    return res.json(pacientes);
  },

  async create(req, res) {
    const { nome, tipo_sanguineo, medico } = req.body;

    const id = crypto.randomBytes(4).toString("HEX");

    await connection("pacientes").insert({
      id,
      nome,
      tipo_sanguineo,
      medico
    });

    return res.json({ id });
  },
};