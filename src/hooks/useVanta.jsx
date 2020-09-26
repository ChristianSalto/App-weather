import { useRef, useEffect, useState } from 'react';
import Clouds from 'vanta/dist/vanta.clouds.min';
import * as THREE from 'three';

const useVanta = () => {
  // El useRef nos sirve para tomar una referencia del DOM
  const myRefDiv = useRef(null); // Valor inicial
  const [vanta, setVanta] = useState(0);

  useEffect(() => {
    if (!vanta) {
      setVanta(
        Clouds({
          THREE,
          el: myRefDiv.current,
        })
      );
    }

    return () => {
      if (vanta) {
        vanta.destroy();
      }
    };
  }, [vanta]);

  return myRefDiv;
};

export default useVanta;
