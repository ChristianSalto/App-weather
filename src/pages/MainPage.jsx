import React from 'react';
import { useHistory } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import AppFrame from './../components/AppFrame';
import CityList from './../components/CityList';
import { getCities } from './../utils/serviceCities';

const MainPage = ({ onSetAllWeather, allWeather }) => {
  const history = useHistory();

  const onClickHandler = (city, countryCode) => {
    // history.push permite alterar la URL por programacion
    history.push(`/city/${countryCode}/${city}`);
  };

  return (
    <AppFrame>
      <Paper elevation={4}>
        <CityList
          cities={getCities()}
          onClickCity={onClickHandler}
          onSetAllWeather={onSetAllWeather}
          allWeather={allWeather}
        />
      </Paper>
    </AppFrame>
  );
};

export default MainPage;
