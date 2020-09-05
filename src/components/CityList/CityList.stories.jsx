import React from 'react';
import CityList from './CityList';

export default {
  title: 'CityList',
  component: CityList,
};

const cities = [
  { city: 'Madrid', country: 'España' },
  { city: 'Berlin', country: 'Alemania' },
  { city: 'Bruselas', country: 'Belgica' },
  { city: 'Paris', country: 'Francia' },
];

export const CityListExample = () => <CityList cities={cities} />;
