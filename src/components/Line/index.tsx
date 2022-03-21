import React from 'react';
import {Container} from './styles';

interface ProsLine {
  colors: string;
  top: number;
  bottom: number;
}

function Line({colors, top, bottom}: ProsLine) {
  return (
    <Container
      testID="container-line"
      style={{
        backgroundColor: colors,
        marginTop: top,
        marginBottom: bottom,
      }}
    />
  );
}

export default Line;
