import React from 'react';
import Forecast from './Forecast';

export default {
  title: 'Forecast',
  component: Forecast,
};

const forecastItemList = [
  { weekDay: 'jueves', hour: 4, state: 'snow', temperature: -5 },
  { weekDay: 'miercoles', hour: 14, state: 'clouds', temperature: 16 },
  { weekDay: 'viernes', hour: 9, state: 'drizzle', temperature: 10 },
  { weekDay: 'sabado', hour: 12, state: 'rain', temperature: 14 },
  { weekDay: 'lunes', hour: 3, state: 'clear', temperature: 22 },
  { weekDay: 'martes', hour: 1, state: 'clouds', temperature: 20 },
];

export const ForecastExample = () => (
  <Forecast forecastItemList={forecastItemList} />
);
