import React from 'react';
import PropTypes from 'prop-types';
import { Grid, List, ListItem } from '@material-ui/core';
import CityInfo from './../CityInfo';
import Weather from './../Weather';

// li: es un item (segun tag html, tiene el role "listitem")
// renderCityAndCountry se va a convertir en una funcion que retorna otra funcion
const renderCityAndCountry = (eventOnClickCity, cityAndCountry) => {
  const { city, country } = cityAndCountry;

  return (
    <ListItem button key={city} onClick={eventOnClickCity}>
      <Grid container justify="center" alignItems="center">
        <Grid item md={9} xs={12}>
          <CityInfo city={city} country={country} />
        </Grid>
        <Grid item md={3} xs={12}>
          <Weather temperature={10} state="sunny" />
        </Grid>
      </Grid>
    </ListItem>
  );
};

// cities: es un array, y en cada item tiene que tenerla ciudad, pero ademas el country
// ul: tag html para listas no ordenadas
const CityList = ({ cities, onClickCity }) => {
  return (
    <List>
      {cities.map((cityAndCountry) =>
        renderCityAndCountry(onClickCity, cityAndCountry)
      )}
    </List>
  );
};

CityList.propTypes = {
  cities: PropTypes.array.isRequired,
  onClickCity: PropTypes.func.isRequired,
};

export default CityList;
