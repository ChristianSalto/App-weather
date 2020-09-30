import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from '@material-ui/lab';
import { Grid, List, ListItem } from '@material-ui/core';
import useCityList from './../../hooks/useCityList';
import CityInfo from './../CityInfo';
import Weather from './../Weather';
import { getCityCode } from './../../utils/utils';

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
      onClick={() => eventOnClickCity(city, countryCode)}
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
const CityList = ({ cities, onClickCity, onSetAllWeather, allWeather }) => {
  const { error, setError } = useCityList(cities, allWeather, onSetAllWeather);

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
