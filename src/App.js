import React, { Fragment, useState } from "react";

function Formulario() {
  const [ cita, actualizarCita ] = useState({
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  });

  const actualizarState = e => {
    actualizarCita({
      ...cita,
      [ e.target.name ]: e.target.value
    });
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>

      <form>
        <label>Nombre Mascota</label>
        <input
          className="u-full-width"
          name="mascota"
          onChange={ actualizarState }
          placeholder="Nombre Mascota"
          type="text"
        />

        <label>Nombre Dueño</label>
        <input
          className="u-full-width"
          name="propietario"
          onChange={ actualizarState }
          placeholder="Nombre Dueño de la Mascota"
          type="text"
        />

        <label>Fecha</label>
        <input
          className="u-full-width"
          name="fecha"
          onChange={ actualizarState }
          type="date"
        />

        <label>Hora</label>
        <input
          className="u-full-width"
          name="hora"
          onChange={ actualizarState }
          type="time"
        />

        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={ actualizarState }
        ></textarea>

        <button type="submit" className="button-primary u-full-width">Agregar</button>
      </form>
    </Fragment>
  );
}

function App() {
  const [ citas, guardarCita ] = useState([]);
  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario />
          </div>
          <div className="one-half column"></div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
