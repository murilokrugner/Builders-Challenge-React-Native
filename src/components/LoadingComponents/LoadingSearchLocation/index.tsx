import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {windowWidth} from '../../../styles/dimensions';
import {Container} from './styles';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

function LoadingSearchLocation() {
  return (
    <Container>
      <ShimmerPlaceHolder
        width={windowWidth - 50}
        height={120}
        style={{
          borderRadius: 20,
          marginBottom: 20,
        }}
      />
      <ShimmerPlaceHolder
        width={windowWidth - 50}
        height={120}
        style={{
          borderRadius: 20,
          marginBottom: 20,
        }}
      />
      <ShimmerPlaceHolder
        width={windowWidth - 50}
        height={120}
        style={{
          borderRadius: 20,
          marginBottom: 20,
        }}
      />
      <ShimmerPlaceHolder
        width={windowWidth - 50}
        height={120}
        style={{
          borderRadius: 20,
        }}
      />
    </Container>
  );
}

export default LoadingSearchLocation;
