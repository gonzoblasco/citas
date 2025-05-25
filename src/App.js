import React, { Fragment, useEffect, useState } from "react";
import Cita from './components/Cita';
import Formulario from './components/Formulario';

function App() {
  let citasIniciales = JSON.parse(localStorage.getItem("citas"));

  if ( !citasIniciales ) {
    citasIniciales = [];
  }

  const [ citas, guardarCita ] = useState(citasIniciales);

  const crearCita = cita => {
    const nuevasCitas = [ ...citas, {...cita, id: Date.now().toString()} ];
    guardarCita(nuevasCitas);
  };

  const eliminarCita = id => {
    const nuevasCitas = citas.filter(cita => cita.id !== id);
    guardarCita(nuevasCitas);
  };

  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citas));
  }, [citas]
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
                id={cita.id}
                key={ cita.id }
              />
            )) }
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
