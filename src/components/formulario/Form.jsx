import React from "react";
import './Form.css'

export default function Form() {
  return (
      <form  id="form_1"  className="formulario">
        <h1 className="formulario_titulo">Contactenos</h1>
        <input type="name" id="name" className="formulario_input" />
        <label htmlFor="" className="formulario_label">
          Nombre
        </label>
        <input type="email" id="email" className="formulario_input" />
        <label htmlFor="" className="formulario_label">
          Email
        </label>
        <input type="tel" id="tel" className="formulario_input" />
        <label htmlFor="" className="formulario_label">
          Telefono
        </label>
        <input type="text" id="text" className="formulario_input" />
        <label htmlFor="" className="formulario_label">
          Consulta
        </label>
        <button
          id="button_contact_form"
          type="button"
          className="formulario_submit"
        >
          ENVIAR
        </button>
      </form>
  );
}
