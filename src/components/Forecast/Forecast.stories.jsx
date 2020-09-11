import React from 'react';
import Forecast from './Forecast';

export default {
  title: 'Forecast',
  component: Forecast,
};

const forecastItemList = [
  { weekDay: 'jueves', hour: 4, state: 'rain', temperature: 15 },
  { weekDay: 'miercoles', hour: 14, state: 'cloud', temperature: 16 },
  { weekDay: 'viernes', hour: 9, state: 'fog', temperature: 10 },
  { weekDay: 'sabado', hour: 12, state: 'rain', temperature: 14 },
  { weekDay: 'lunes', hour: 3, state: 'sunny', temperature: 22 },
  { weekDay: 'martes', hour: 1, state: 'cloudy', temperature: 20 },
];

export const ForecastExample = () => (
  <Forecast forecastItemList={forecastItemList} />
);
