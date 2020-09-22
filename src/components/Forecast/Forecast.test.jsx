import React from 'react';
import Forecast from './Forecast';
import { render } from '@testing-library/react';

const forecastItemList = [
  { weekDay: 'jueves', hour: 4, state: 'snow', temperature: 15 },
  { weekDay: 'miercoles', hour: 14, state: 'clouds', temperature: 16 },
  { weekDay: 'viernes', hour: 9, state: 'drizzle', temperature: 10 },
  { weekDay: 'sabado', hour: 12, state: 'rain', temperature: 14 },
  { weekDay: 'lunes', hour: 3, state: 'clear', temperature: 22 },
  { weekDay: 'martes', hour: 1, state: 'clouds', temperature: 20 },
];

test('Forecast render', async () => {
  // findAllByTestId nos va a permitir encontrar cada Item con esa marca

  const { findAllByTestId } = render(
    <Forecast forecastItemList={forecastItemList} />
  );

  const forecastItems = await findAllByTestId('forecast-item-container');

  expect(forecastItems).toHaveLength(6);
});
