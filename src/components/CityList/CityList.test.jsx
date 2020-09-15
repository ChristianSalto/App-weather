import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import CityList from './CityList';

const cities = [
  { city: 'Madrid', country: 'España' },
  { city: 'Berlin', country: 'Bruselas' },
  { city: 'Paris', country: 'Francia' },
  { city: 'Londres', country: 'Inglaterra' },
];

test('CityList renders', async () => {
  // AAA Arrange Act Assert

  const { findAllByRole } = render(
    <CityList cities={cities} onClickCity={jest.fn()} />
  );

  const items = await findAllByRole('button');

  expect(items).toHaveLength(4);
});

test('CityList click on item', async () => {
  // Debemos simular una accion del usuario: click sobre un item
  // Para eso vamos a utilizar una funcion "mock"
  const fnClickOnItem = jest.fn();

  // console.log(fnClickOnItem);

  const { findAllByRole } = render(
    <CityList cities={cities} onClickCity={fnClickOnItem} />
  );

  const items = await findAllByRole('button');

  // Ahora, para simular la accion, vamos a utilizar fireEvent
  // fireEvent es parte de la libreria testing-library/react

  fireEvent.click(items[0]);

  // ¿Ahora que tuvo que suceder?
  // Se debio llamar a la funcion fnClickOnItem UNA unica vez

  expect(fnClickOnItem).toHaveBeenCalledTimes(1);
});
