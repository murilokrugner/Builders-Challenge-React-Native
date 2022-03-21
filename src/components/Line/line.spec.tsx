import React from 'react';
import {render} from '@testing-library/react-native';

import Line from '.';

describe('Line', () => {
  it('Current line rendering test', () => {
    const {getByTestId} = render(<Line colors="#000" top={0} bottom={0} />);

    const containerLine = getByTestId('container-line');

    expect(containerLine).toBeTruthy();
  });
});
