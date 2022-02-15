import React from 'react';
import './Resultados.css';
import Nube from '../../Static/img/nube.png';

// const Resultados = ({dias}) => {

const Resultados = data => {
  const Dias = ['lunes', 'Martes', 'Miercoles', 'Jueves', 'VIernes'];

  return (
    <div className="CP-Contenedor-Lista">
      <div className="CI-Tarjeta-clima-dias">
        <div className="I-Tarjeta-dias">
          <h4 className="dia"></h4>
          <h5 className="Temperatura-dia"></h5>
        </div>
      </div>
    </div>
  );
};

export default Resultados;
