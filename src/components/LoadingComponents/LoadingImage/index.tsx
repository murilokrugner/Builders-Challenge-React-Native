import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {Container} from './styles';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

function LoadingImage() {
  return (
    <Container>
      <ShimmerPlaceHolder
        width={200}
        height={200}
        style={{
          borderRadius: 20,
        }}
      />
      <ShimmerPlaceHolder
        width={150}
        height={20}
        style={{
          borderRadius: 20,
          marginTop: 50,
        }}
      />
    </Container>
  );
}

export default LoadingImage;
