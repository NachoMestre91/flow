// import axios from 'axios';
import {useEffect, useState} from 'react';
import './Home.css';
import Logo from '../../Static/img/logo.png';
import Resultados from '../Resultados/Resultados';

const Home = () => {
  // const apiKey = 'f56f24967aaf51182d1d4df628297c6d';
  // const [inputCity, setInputCity] = useState('');
  // const [data, setData] = useState({});

  // onst getWetherDetails = cityName => {
  //   if (!cityName) return;
  //   const apiURL =
  //     'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey;
  //   axios
  //     .get(apiURL)
  //     .then(res => {
  //       console.log('response', res.data);
  //       setData(res.data);
  //     })
  //     .catch(err => {
  //       console.log('err', err);
  //     });
  // };

  // const handleChangeInput = e => {
  //   console.log('value', e.target.value);
  //   setInputCity(e.target.value);
  // };

  // const handleSearch = () => {
  //   getWetherDetails(inputCity);
  // };

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
              <input className="Input-busqueda"></input>

              <button className="Boton-busqueda"> Buscar</button>
            </div>
          </div>
          <div className="CI-Resultados">
            <div className="I-Resultado-general">
              <Resultados />
            </div>
            <div className="I-Resultado-dias">
              <Resultados />
              <Resultados />
              <Resultados />
              <Resultados />
              <Resultados />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
