import React from 'react';
import { useHistory } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import AppFrame from './../components/AppFrame';
import CityList from './../components/CityList';

const cities = [
  { city: 'Madrid', country: 'España', countryCode: 'ES' },
  { city: 'Berlin', country: 'Alemania', countryCode: 'DE' },
  { city: 'Bruselas', country: 'Belgica', countryCode: 'BEL' },
  { city: 'Paris', country: 'Francia', countryCode: 'FR' },
];

const MainPage = () => {
  const history = useHistory();

  const onClickHandler = () => {
    // history.push permite alterar la URL por programacion
    history.push('/city');
  };

  return (
    <AppFrame>
      <Paper elevation={4}>
        <CityList cities={cities} onClickCity={onClickHandler} />
      </Paper>
    </AppFrame>
  );
};

export default MainPage;
