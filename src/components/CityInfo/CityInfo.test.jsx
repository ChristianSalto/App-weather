import React from 'react';
import { render } from '@testing-library/react';
import CityInfo from './CityInfo';

test('CityInfo render', async () => {
  const city = 'Madrid';
  const country = 'España';
  // Render: renderiza el componente y retorna una serie de funciones de utilidad
  // en este caso utilizamos "findAllByRole" para "consultar" a nuestro componente
  // vamos a analizar su estado en el "Assert".
  const { findAllByRole } = render(<CityInfo city={city} country={country} />);

  // Assert
  // findAllByRole nos va a buscar (en este caso ) todos los componentes que sean
  // "heading" => H1, H2, H3..etc
  // El resultado es un array de componentes (cityAndCountryComponents)
  const cityAndCountryComponents = await findAllByRole('heading');

  expect(cityAndCountryComponents[0]).toHaveTextContent(city);
  expect(cityAndCountryComponents[1]).toHaveTextContent(country);
});
