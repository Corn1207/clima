import React from 'react';
import PropTypes from 'prop-types';


const Clima = ({resultado}) => {

  // Extraer los valores
  const {name, main} = resultado;

  if(!name) return null;

  // Convertir a centigrados
  const temp = parseFloat( main.temp - 273.15, 10).toFixed(2);
  const temp_max = parseFloat( main.temp_max - 273.15, 10).toFixed(2);
  const temp_min = parseFloat( main.temp_min - 273.15, 10).toFixed(2);

  return ( 
    <h1 className="card-panel white col s12">
      <div className="black-text">
        <h2>El clima de {name} es: </h2>
        <p className="temperatura">
          {temp} <span> &#x2103; </span>
        </p>
      </div>
      <p className="">
        Temperatura máxima: {temp_max} <span> &#x2103; </span>
      </p>
      <p className="">
        Temperatura mínima: {temp_min} <span> &#x2103; </span>
      </p>
  </h1>
   );
}

Clima.propTypes = {
  resultado: PropTypes.object.isRequired
}
 
export default Clima;