import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Clouds from 'vanta/dist/vanta.clouds.min';
import * as THREE from 'three';

const WelcomeScreen = ({ children }) => {
  // El useRef nos sirve para tomar una referencia del DOM
  const myRefDiv = useRef(null); // Valor inicial
  const [vanta, setVanta] = useState(0);

  // En la primera renderizacion "myRefDiv.current" es igual
  // a "nulo", el valor inicial

  // La funcion de useEffect se va "invocar" ante
  // la segunda renderizacion, en ese punto ya va a
  // contener un valor "myRefDiv.current"
  useEffect(() => {
    // solo pasa una vez dentro del if
    // vanta === 0, es igual a "vanta == false"
    if (!vanta) {
      // SOLO PASA UNA VEZ
      // Aqui vamos hacer la inicializacion de "vanta"
      // Activo el efecto "clouds"
      setVanta(
        Clouds({
          THREE,
          el: myRefDiv.current,
        })
      ); // vanta != 0; es diferente de falso
    }
    // Al salir de la pantalla debemos detener el efecto
    // y des-asociar todos los recursos (div + vanta effect)
    return () => {
      // Dentro de esta funcion se va a realizar la tarea
      // de destruir los recursos tomados por "vanta"
      if (vanta) {
        vanta.destroy();
      }
    };
  }, [vanta]); // Con esto me aseguro que siga funcionando
  // correctamente si tuviera mas variables "use"

  return (
    <div className="full" ref={myRefDiv}>
      {children}
    </div>
  );
};

WelcomeScreen.propTypes = {
  children: PropTypes.node,
};

export default WelcomeScreen;
