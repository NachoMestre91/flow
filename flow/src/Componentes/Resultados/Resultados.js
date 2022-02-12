import React from 'react';
import './Resultados.css';
import Nube from '../../Static/img/nube.png';

const Resultados = () => {
  return (
    <div className="CP-Contenedor-Lista">
      <div className="CI-Tarjeta-clima">
        <div className="I-Tarjeta">
          <img className="icono-nube" src={Nube} alt=""></img>
          <h4 className="Ciudad">CIUDAD</h4>
          <h3 className="Clima">30.8 °C</h3>
        </div>
      </div>
    </div>
  );
};

export default Resultados;
