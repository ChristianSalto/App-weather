import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from '@material-ui/lab';
import { Grid, List, ListItem } from '@material-ui/core';
import useCityList from './../../hooks/useCityList';
import CityInfo from './../CityInfo';
import Weather from './../Weather';
import { getCityCode } from './../../utils/utils';

// funcion que nos sirve para debuggear y ver los estados previos y siguiente haciendo una
// comparacion de ambas y  devolviendonos un boolean en funcion de la comparacion

// const areEqual = (prev, next) => {
//   debugger;
//   console.log('city', prev.city === next.city);
//   console.log('countryCode', prev.countryCode === next.countryCode);
//   console.log('country', prev.country === next.country);
//   console.log('weather', prev.weather === next.weather);
//   console.log(
//     'eventOnClickCity',
//     prev.eventOnClickCity === next.eventOnClickCity
//   );

//   return false;
// };

const CityListItem = React.memo(function CityListItem({
  city,
  countryCode,
  country,
  weather,
  eventOnClickCity,
}) {
  return (
    <ListItem button onClick={() => eventOnClickCity(city, countryCode)}>
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
});

// li: es un item (segun tag html, tiene el role "listitem")
// renderCityAndCountry se va a convertir en una funcion que retorna otra funcion
const renderCityAndCountry = (eventOnClickCity) => (
  cityAndCountry,
  weather
) => {
  const { city, countryCode } = cityAndCountry;
  return (
    <CityListItem
      key={getCityCode(city, countryCode)}
      eventOnClickCity={eventOnClickCity}
      weather={weather}
      {...cityAndCountry} // Esto me permite cojer las propiedades de un objeto y pasarselas de forma directa
      // el inconveniente de esto es que si alguna de las propiedades no la necesitaramos
      // y esa misma sufre un cambio de estado, sufririamos una re-renderizacion del componente inecesaria
    />
  );
};

// cities: es un array, y en cada item tiene que tenerla ciudad, pero ademas el country
// ul: tag html para listas no ordenadas
const CityList = ({ cities, onClickCity, actions, data }) => {
  const { allWeather } = data;
  const { error, setError } = useCityList(cities, allWeather, actions);

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

export default React.memo(CityList);
