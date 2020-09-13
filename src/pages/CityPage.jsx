import React from 'react';
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import CityInfo from './../components/CityInfo';
import Weather from './../components/Weather';
import WeatherDetails from './../components/WeatherDetails';
import ForecastChart from './../components/ForecastChart';
import Forecast from './../components/Forecast';

const dataExample = [
  {
    dayHour: 'Dom 4',
    min: 14,
    max: 22,
  },
  {
    dayHour: 'Lun 14',
    min: 12,
    max: 24,
  },
  {
    dayHour: 'Mar 9',
    min: 15,
    max: 19,
  },
  {
    dayHour: 'Mir 12',
    min: 5,
    max: 11,
  },
  {
    dayHour: 'Juv 3',
    min: 20,
    max: 27,
  },
  {
    dayHour: 'Vie 1',
    min: 11,
    max: 18,
  },
];

const forecastItemListExample = [
  { weekDay: 'domingo', hour: 4, state: 'rain', temperature: 15 },
  { weekDay: 'lunes', hour: 14, state: 'cloud', temperature: 16 },
  { weekDay: 'martes', hour: 9, state: 'fog', temperature: 10 },
  { weekDay: 'miercoles', hour: 12, state: 'rain', temperature: 14 },
  { weekDay: 'jueves', hour: 3, state: 'sunny', temperature: 22 },
  { weekDay: 'viernes', hour: 1, state: 'cloudy', temperature: 20 },
];

const CityPage = (props) => {
  const city = 'Madrid';
  const country = 'España';
  const state = 'cloudy';
  const temperature = 20;
  const humidity = 80;
  const wind = 5;
  const data = dataExample;
  const forecastItemList = forecastItemListExample;

  return (
    <Grid container justify="space-around" direction="column" spacing={2}>
      <Grid item container xs={12} justify="center" alignItems="flex-end">
        <CityInfo city={city} country={country} />
      </Grid>
      <Grid container item xs={12} justify="center">
        <Weather state={state} temperature={temperature} />
        <WeatherDetails humidity={humidity} wind={wind} />
      </Grid>
      <Grid item xs={12}>
        <ForecastChart data={data} />
      </Grid>
      <Grid item xs={12}>
        <Forecast forecastItemList={forecastItemList} />
      </Grid>
    </Grid>
  );
};

export default CityPage;
