import React from 'react';
import {render} from '@testing-library/react-native';

import PanelInformations from '.';

describe('PanelInformations', () => {
  it('Current panel informations rendering test', () => {
    const panelInformation = {
      temp: 1,
      dt: 2,
      weather: [
        {
          icon: 'icon.png',
        },
      ],
    };

    const {getByTestId} = render(
      <PanelInformations panelInformation={[panelInformation]} />,
    );

    const containerPanelInformations = getByTestId(
      'container-panel-informations',
    );

    expect(containerPanelInformations).toBeTruthy();
  });
});
