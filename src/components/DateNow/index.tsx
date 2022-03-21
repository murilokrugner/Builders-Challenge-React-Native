import React from 'react';
import ptBR, {format} from 'date-fns';
import {DateText} from './styles';

function DateNow() {
  return (
    <DateText testID="date-formatted">
      {format(new Date(), 'dd, MMM, yyyy', {locale: ptBR})}
    </DateText>
  );
}

export default DateNow;
