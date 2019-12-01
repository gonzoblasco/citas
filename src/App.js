import React, { Fragment, useEffect, useState } from "react";

function Cita({ cita, eliminarCita, index }) {
  return (
    <div className="cita">
      <p>Mascota: <span>{ cita.mascota }</span></p>
      <p>Dueño: <span>{ cita.propietario }</span></p>
      <p>Fecha: <span>{ cita.fecha }</span></p>
      <p>Hora: <span>{ cita.hora }</span></p>
      <p>Síntomas: <span>{ cita.sintomas }</span></p>
      <button
        className="button eliminar u-full-width"
        onClick={ () => eliminarCita(index) }
      >Eliminar X
      </button>
    </div>
  );
}

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
    crearCita(cita);
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

function App() {
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));

  if ( !citasIniciales ) {
    citasIniciales = [];
  }

  const [ citas, guardarCita ] = useState(citasIniciales);

  const crearCita = cita => {
    const nuevasCitas = [ ...citas, cita ];
    guardarCita(nuevasCitas);
  };

  const eliminarCita = index => {
    const nuevasCitas = [ ...citas ];
    nuevasCitas.splice(index, 1);
    guardarCita(nuevasCitas);
  };

  useEffect(() => {
      let citasIniciales = JSON.parse(localStorage.getItem("citas"));

      if ( citasIniciales ) {
        localStorage.setItem("citas", JSON.stringify(( citas )));
      } else {
        localStorage.setItem("citas", JSON.stringify([]));
      }
    }, [ citas ]
  );

  const titulo = Object.keys(citas).length === 0 ? "No Hay Citas" : "Administrar las Citas aquí";

  return (
    <Fragment>
      <h1>Administrador de Pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario crearCita={ crearCita } />
          </div>
          <div className="one-half column">
            <h2>{ titulo }</h2>
            { citas.map((cita, index) => (
              <Cita
                cita={ cita }
                eliminarCita={ eliminarCita }
                index={ index }
                key={ index }
              />
            )) }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
