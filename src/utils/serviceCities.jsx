const cities = [
  { city: 'Madrid', country: 'España', countryCode: 'ES' },
  { city: 'Berlin', country: 'Alemania', countryCode: 'DE' },
  { city: 'Bruselas', country: 'Belgica', countryCode: 'BEL' },
  { city: 'Paris', country: 'Francia', countryCode: 'FR' },
];

export const getCities = () => cities;

export const getCountryNameByCountryCode = (countryCode) =>
  cities.filter((c) => c.countryCode === countryCode)[0].country;
