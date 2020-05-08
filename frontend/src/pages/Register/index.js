import "./styles.css";

import React, { useState } from "react";

import background from "../../assets/background.png";

import api from "../../services/api";

export default function Register() {
  const [nome, setNome] = useState("");
  const [tipo_sanguineo, setTipo_sanguineo] = useState("");

  async function handleRegister(e) {
    e.preventDefault();

    const data = {
      nome,
      tipo_sanguineo,
    };

    try {
      const response = await api.post("pacientes", data);

      alert(`User ${response.data.nome} registered with success.`);

    } catch (error) {
      alert(
        "There was a problem with your registration. Please check your info and try again."
      );
    }
  }

  return (
    <div className="register-container">

      <section className="form"></section>

      <form onSubmit={handleRegister}>
        <h1>Registro</h1>

        <input
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />

        <input
          placeholder="Tipo Sanguíneo"
          value={tipo_sanguineo}
          onChange={(e) => setTipo_sanguineo(e.target.value)}
        />

          <button className="button" type="submit">
            Registrar
          </button> 
          
      </form>
      <img src={background} alt="background" />
    </div>
  );
}
