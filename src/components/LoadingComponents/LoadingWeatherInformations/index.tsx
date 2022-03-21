import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {Container} from './styles';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

function LoadingWeatherInformations() {
  return (
    <Container>
      <ShimmerPlaceHolder width={50} height={20} style={{borderRadius: 20}} />
      <ShimmerPlaceHolder
        width={50}
        height={20}
        style={{
          borderRadius: 20,
        }}
      />
      <ShimmerPlaceHolder
        width={50}
        height={20}
        style={{
          borderRadius: 20,
        }}
      />
    </Container>
  );
}

export default LoadingWeatherInformations;
