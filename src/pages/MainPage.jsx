import React from 'react';
import { useHistory } from 'react-router-dom';
import { Paper } from '@material-ui/core';
import AppFrame from './../components/AppFrame';
import CityList from './../components/CityList';
import { getCities } from './../utils/serviceCities';

const MainPage = ({ actions, data }) => {
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
          actions={actions}
          data={data}
        />
      </Paper>
    </AppFrame>
  );
};

export default MainPage;
