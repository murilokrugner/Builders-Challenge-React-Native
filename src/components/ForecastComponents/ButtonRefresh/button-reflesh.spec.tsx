import React from 'react';
import {render} from '@testing-library/react-native';

import ButtonReflesh from '.';

describe('ButtonReflesh', () => {
  it('Current button-reflesh rendering test', () => {
    const {getByTestId} = render(
      <ButtonReflesh setPressButtonRefresh={() => {}} />,
    );

    const containerButton = getByTestId('container-button');

    expect(containerButton).toBeTruthy();
  });
});
