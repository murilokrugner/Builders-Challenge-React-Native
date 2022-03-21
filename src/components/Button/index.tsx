import React, {ReactNode} from 'react';
import {ActivityIndicator} from 'react-native';
import colors from '../../styles/colors';

import {Container, Text} from './styles';

interface PropsButton {
  loading: boolean;
  children: ReactNode;
}

function Button({children, loading, ...rest}: PropsButton) {
  return (
    <Container {...rest} testID="container-button">
      {loading ? (
        <ActivityIndicator size="small" color={colors.loading} />
      ) : (
        <Text>{children}</Text>
      )}
    </Container>
  );
}

export default Button;
