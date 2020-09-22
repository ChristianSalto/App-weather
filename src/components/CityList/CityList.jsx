import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import convertUnits from 'convert-units';
import { Grid, List, ListItem } from '@material-ui/core';
import CityInfo from './../CityInfo';
import Weather from './../Weather';
import { Alert } from '@material-ui/lab';

const getCityCode = (city, countryCode) => `${city}-${countryCode}`;
// li: es un item (segun tag html, tiene el role "listitem")
// renderCityAndCountry se va a convertir en una funcion que retorna otra funcion
const renderCityAndCountry = (eventOnClickCity) => (
  cityAndCountry,
  weather
) => {
  const { city, countryCode, country } = cityAndCountry;
  //const { temperature, state } = weather;

  return (
    <ListItem
      button
      key={getCityCode(city, countryCode)}
      onClick={eventOnClickCity}
    >
      <Grid container justify="center" alignItems="center">
        <Grid item md={9} xs={12}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item md={3} xs={12}>
          <Weather
            temperature={weather && weather.temperature} // Con este operador podremos pasar la prop
            state={weather && weather.state} // como undefined con lo que podremos controlar el error que nos daria (weather.temperature o weather.state)
          />
        </Grid>
      </Grid>
    </ListItem>
  );
};

// cities: es un array, y en cada item tiene que tenerla ciudad, pero ademas el country
// ul: tag html para listas no ordenadas
const CityList = ({ cities, onClickCity }) => {
  const [allWeather, setAllWeather] = useState({});
  const [error, setError] = useState(null);

  useEffect(() => {
    const setWeather = async (city, countryCode) => {
      const API_KEY = process.env.REACT_APP_API_KEY;
      const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${API_KEY}`;

      // Version async/await

      try {
        const response = await axios.get(URL);
        const { data } = response;
        const temperature = Number(
          convertUnits(data.main.temp).from('K').to('C').toFixed(0)
        );
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

  //const weather = { temperature: 11, state: 'sunny' };

  return (
    <div>
      {error && (
        <Alert onClose={() => setError(null)} severity="error">
          {error}
        </Alert>
      )}
      <List>
        {cities.map((cityAndCountry) =>
          renderCityAndCountry(onClickCity)(
            cityAndCountry,
            allWeather[
              getCityCode(cityAndCountry.city, cityAndCountry.countryCode)
            ]
          )
        )}
      </List>
    </div>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      countryCode: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
