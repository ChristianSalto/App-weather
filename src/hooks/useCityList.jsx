import { useState, useEffect } from 'react';
import axios from 'axios';
import { getCityCode, toCelsius } from './../utils/utils';
import { getWeatherUrl } from './../utils/urls';

// Hook personalizado
const useCityList = (cities) => {
  const [allWeather, setAllWeather] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const setWeather = async (city, countryCode) => {
      const URL = getWeatherUrl({ city, countryCode });

      // Version async/await

      try {
        const response = await axios.get(URL);
        const { data } = response;
        const temperature = toCelsius(data.main.temp);
        const state = data.weather[0].main.toLowerCase();

        const propName = getCityCode(city, countryCode);
        const propValue = { temperature, state };

        setAllWeather((allWeather) => ({
          ...allWeather,
          [propName]: propValue,
        }));
      } catch (error) {
        if (error.response) {
          // errores que nos responde el servidor
          setError('Ha ocurrido un error en el servidor del clima');
        } else if (error.request) {
          // errores que suceden por no llegar al servidor
          setError('Verifique la conexion a internet');
        } else {
          // Errores imprevistos
          setError('Error al cargar los datos');
        }
      }

      // Version Promise

      /* axios
          .get(URL)
          .then((response) => {
            const { data } = response;
            const temperature = Number(
              convertUnits(data.main.temp).from('K').to('C').toFixed(0)
            );
            const state = data.weather[0].main.toLowerCase();
  
            const propName = `${city}-${country}`;
            const propValue = { temperature, state };
  
            setAllWeather((allWeather) => ({
              ...allWeather,
              [propName]: propValue,
            }));
          })
          .catch((error) => {
            if (error.response) {
              // errores que nos responde el servidor
              setError('Ha ocurrido un error en el servidor del clima');
            } else if (error.request) {
              // errores que suceden por no llegar al servidor
              setError('Verifique la conexion a internet');
            } else {
              // Errores imprevistos
              setError('Error al cargar los datos');
            }
          }); */
    };

    cities.forEach(({ city, countryCode }) => {
      setWeather(city, countryCode);
    });
  }, [cities]);

  return { allWeather, error, setError };
};

export default useCityList;
