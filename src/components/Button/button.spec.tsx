import React from 'react';
import {render} from '@testing-library/react-native';

import Button from '.';

describe('Button', () => {
  it('Current button rendering test', () => {
    const {getByTestId} = render(
      <Button loading={false}>rendering test</Button>,
    );

    const containerButton = getByTestId('container-button');

    expect(containerButton).toBeTruthy();
  });
});
