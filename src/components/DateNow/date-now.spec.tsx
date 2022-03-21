import React from 'react';
import {render} from '@testing-library/react-native';

import DateNow from '.';

describe('DateNow', () => {
  it('Current date rendering test', () => {
    const {getByTestId} = render(<DateNow />);

    const dateText = getByTestId('date-formatted');

    expect(dateText).toBeTruthy();
  });
});
