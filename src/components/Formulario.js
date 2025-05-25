import React, { Fragment, useState } from 'react';

function Formulario({ crearCita }) {
  const stateInicial = {
    mascota: "",
    propietario: "",
    fecha: "",
    hora: "",
    sintomas: ""
  };

  const [ cita, actualizarCita ] = useState(stateInicial);

  const actualizarState = e => {
    actualizarCita({
      ...cita,
      [ e.target.name ]: e.target.value
    });
  };

  const enviarCita = e => {
    e.preventDefault();

    // Validar
    const { mascota, propietario, fecha, hora, sintomas } = cita;
    if (mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
      alert("Todos los campos son obligatorios");
      return;
    }

    // Crear la cita
    crearCita(cita);

    // Reiniciar el form
    actualizarCita(stateInicial);
  };

  return (
    <Fragment>
      <h2>Crear Cita</h2>

      <form onSubmit={ enviarCita }>
        <label>Nombre Mascota</label>
        <input
          className="u-full-width"
          name="mascota"
          onChange={ actualizarState }
          placeholder="Nombre Mascota"
          type="text"
          value={ cita.mascota }
        />

        <label>Nombre Dueño</label>
        <input
          className="u-full-width"
          name="propietario"
          onChange={ actualizarState }
          placeholder="Nombre Dueño de la Mascota"
          type="text"
          value={ cita.propietario }
        />

        <label>Fecha</label>
        <input
          className="u-full-width"
          name="fecha"
          onChange={ actualizarState }
          type="date"
          value={ cita.fecha }
        />

        <label>Hora</label>
        <input
          className="u-full-width"
          name="hora"
          onChange={ actualizarState }
          type="time"
          value={ cita.hora }
        />

        <label>Sintomas</label>
        <textarea
          className="u-full-width"
          name="sintomas"
          onChange={ actualizarState }
          value={ cita.sintomas }
        ></textarea>

        <button type="submit" className="button-primary u-full-width">Agregar</button>
      </form>
    </Fragment>
  );
}

export default Formulario;
