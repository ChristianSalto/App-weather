import React from 'react';
import ForecastItem from './ForecastItem';
import { render } from '@testing-library/react';

test('ForecastItem render', async () => {
  const { getAllByText } = render(
    <ForecastItem weekDay="lunes" hour={2} state="sunny" temperature={40} />
  );

  const week = await getAllByText('lunes');
  expect(week).toHaveLength(1);
  const hour = await getAllByText('2');
  expect(hour).toHaveLength(1);
  const temp = await getAllByText(`${40} º`);
  expect(temp).toHaveLength(1);
});
