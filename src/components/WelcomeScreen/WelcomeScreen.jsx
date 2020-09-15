import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

const WelcomeScreen = ({ children }) => {
  // El useRef nos sirve para tomar una referencia del DOM
  const myRefDiv = useRef(null); // Valor inicial
  const [vanta, setVanta] = useState(0);

  // En la primera renderizacion "myRefDiv.current" es igual
  // a "nulo", el valor inicial
  console.log('myRefDiv.current', myRefDiv.current);

  // La funcion de useEffect se va "invocar" ante
  // la segunda renderizacion, en ese punto ya va a
  // contener un valor "myRefDiv.current"
  useEffect(() => {
    console.log('myRefDiv.current (en useEffect)', myRefDiv.current);

    // solo pasa una vez dentro del if
    // vanta === 0, es igual a "vanta == false"
    if (!vanta) {
      // SOLO PASA UNA VEZ
      setVanta(1); // vanta = 1
      console.log('Establezco vanta a un valor diferente de 0');
    }
  });

  return (
    <div ref={myRefDiv}>
      <h4>WelcomeScreen</h4>
    </div>
  );
};

WelcomeScreen.propTypes = {
  children: PropTypes.node,
};

export default WelcomeScreen;
