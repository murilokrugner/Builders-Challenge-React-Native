import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {Container} from './styles';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

function LoadingCity() {
  return (
    <Container>
      <ShimmerPlaceHolder
        width={180}
        height={20}
        style={{
          borderRadius: 20,
        }}
      />
    </Container>
  );
}

export default LoadingCity;
