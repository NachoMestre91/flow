// import axios from 'axios';
import {useEffect, useState} from 'react';
import axios from 'axios';
import './Home.css';
import Logo from '../../Static/img/logo.png';
import Nube from '../../Static/img/nube.png';
import Resultados from '../Resultados/Resultados';

import Select from 'react-select';

const Home = () => {
  const apiKey = '0834d5782934b16a1dfea6fbca4484b8';
  const [Ciudad, setIsCiudad] = useState('');
  const [data, setData] = useState({});

  const DatosTiempo = Lugar => {
    if (!Lugar) return;
    const apiURL =
      'https://api.openweathermap.org/data/2.5/weather?q=' + Lugar + '&APPID=' + apiKey;
    axios
      .get(apiURL)
      .then(res => {
        console.log('Respuesta', res.data);
        setData(res.data);
      })
      .catch(err => {
        console.log('err', err);
      });
  };

  const CambiosBusqueda = e => {
    // console.log('value', e.target.value);
    setIsCiudad(e.target.value);
  };

  const BuscarCiudad = () => {
    DatosTiempo(Ciudad);
  };

  const escucharCambios = e => {
    DatosTiempo(e.value);
  };

  const Ciudades = [
    {value: 'San Juan', label: 'San Juan'},
    {value: 'Mendoza', label: 'Mendoza'},
    {value: 'Buenos Aires', label: 'Buenos Aires'},
    {value: 'Barcelona', label: 'Barcelona'},
    {value: 'Madrid', label: 'Madrid'},
  ];

  //////////////////////////////////

  return (
    <div className="LP-Home ">
      <div className="LI-Home">
        <div className="CI-Cabecera">
          <img className="Logo" src={Logo} alt=""></img>
          <div className="Titulo-cabecera">
            <h2 className="Nombre-challenge">| Challenge - Mestre Nacho</h2>
          </div>
        </div>
        <div className="CP-Home">
          <div className="CI-Selector">
            <div className="I-Contenedor-busqueda">
              <img className="Logo" src={Logo} alt=""></img>
              <label className="Label">Ingrese ciudad</label>
              <input className="Input-busqueda" value={Ciudad} onChange={CambiosBusqueda}></input>
              <label className="Label">Seleccione ciudad</label>
              <Select
                className="Selector"
                placeholder="Seleccione ciudad"
                options={Ciudades ? Ciudades : 'No se encontro ciudad'}
                onChange={e => escucharCambios(e)}
              />
              <button className="Boton-busqueda" onClick={BuscarCiudad}>
                Buscar
              </button>
            </div>
          </div>
          <div className="CI-Resultados">
            <div className="I-Resultado-general">
              {Object.keys(data).length > 0 && (
                <div className="CI-Tarjeta-clima">
                  <div className="I-Tarjeta">
                    <img className="icono-nube" src={Nube} alt=""></img>
                    <h4 className="Ciudad">{data?.name}</h4>
                    <h4 className="Ciudad">Pais: {data?.sys?.country}</h4>
                    <h3 className="Clima">{(data?.main?.temp - 273.15).toFixed(2)}°C</h3>
                    <div className="Temperaturas">
                      <h5 className="Temperaturas-grados">
                        Min: {(data?.main?.temp_min - 273.15).toFixed(2)} °C
                      </h5>
                      <h5 className="Temperaturas-grados">
                        Max: {(data?.main?.temp_max - 273.15).toFixed(2)} °C
                      </h5>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="I-Resultado-dias">
              {/* {data.state.map((dias, index) => {
                if (index > 0) {
                  return <Resultados key={index} dia={dias} />;
                }
              })} */}

              <Resultados data={data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
