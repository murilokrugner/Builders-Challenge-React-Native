import React from 'react';
import {render} from '@testing-library/react-native';

import ButtonPlus from '.';

describe('ButtonPlus', () => {
  it('Current button-plus rendering test', () => {
    const {getByTestId} = render(
      <ButtonPlus navigationNewLocation={() => {}} />,
    );

    const containerButton = getByTestId('container-button');

    expect(containerButton).toBeTruthy();
  });
});
