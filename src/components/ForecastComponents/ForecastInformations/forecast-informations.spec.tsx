import React from 'react';
import {render} from '@testing-library/react-native';

import ForecastInformations from '.';

describe('ForecastInformations', () => {
  it('Current forecast informations rendering test', () => {
    const weatherInformations = {
      temp: 1,
      humidity: 2,
      wind_speed: 3,
    };

    const {getByTestId} = render(
      <ForecastInformations weatherInformations={weatherInformations} />,
    );

    const containerForecastInformations = getByTestId(
      'container-forecast-informations',
    );

    expect(containerForecastInformations).toBeTruthy();
  });
});
