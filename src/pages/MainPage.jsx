import React from 'react';
import { useHistory } from 'react-router-dom';
import CityList from './../components/CityList';

const cities = [
  { city: 'Madrid', country: 'España' },
  { city: 'Berlin', country: 'Alemania' },
  { city: 'Bruselas', country: 'Belgica' },
  { city: 'Paris', country: 'Francia' },
];

const MainPage = () => {
  const history = useHistory();

  const onClickHandler = () => {
    // history.push permite alterar la URL por programacion
    history.push('/city');
  };

  return (
    <div>
      <h2>Lista de ciudades</h2>
      <CityList cities={cities} onClickCity={onClickHandler} />
    </div>
  );
};

export default MainPage;
