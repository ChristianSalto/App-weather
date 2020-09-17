import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Grid, List, ListItem } from '@material-ui/core';
import CityInfo from './../CityInfo';
import Weather from './../Weather';

// li: es un item (segun tag html, tiene el role "listitem")
// renderCityAndCountry se va a convertir en una funcion que retorna otra funcion
const renderCityAndCountry = (eventOnClickCity) => (
  cityAndCountry,
  weather
) => {
  const { city, country } = cityAndCountry;
  //const { temperature, state } = weather;

  return (
    <ListItem button key={city} onClick={eventOnClickCity}>
      <Grid container justify="center" alignItems="center">
        <Grid item md={9} xs={12}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item md={3} xs={12}>
          {weather ? (
            <Weather temperature={weather.temperature} state={weather.state} />
          ) : (
            'No hay datos'
          )}
        </Grid>
      </Grid>
    </ListItem>
  );
};

// cities: es un array, y en cada item tiene que tenerla ciudad, pero ademas el country
// ul: tag html para listas no ordenadas
const CityList = ({ cities, onClickCity }) => {
  const [allWeather, setallWeather] = useState({});

  useEffect(() => {
    const setWeather = (city) => {
      const API_KEY = '';
      const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
      axios.get(URL).then((response) => {
        const { data } = response;
        const temperature = data.main.temp;
        const state = 'sunny';
      });
    };

    cities.forEach(({ city, country }) => {
      setWeather(city);
    });
  }, [cities]);

  //const weather = { temperature: 11, state: 'sunny' };

  return (
    <List>
      {cities.map((cityAndCountry) =>
        renderCityAndCountry(onClickCity)(
          cityAndCountry,
          allWeather[`${cityAndCountry.city}-${cityAndCountry.country}`]
        )
      )}
    </List>
  );
};

CityList.propTypes = {
  cities: PropTypes.arrayOf(
    PropTypes.shape({
      city: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
    })
  ).isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
