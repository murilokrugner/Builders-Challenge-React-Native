import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import {createShimmerPlaceholder} from 'react-native-shimmer-placeholder';
import {Container} from './styles';

const ShimmerPlaceHolder = createShimmerPlaceholder(LinearGradient);

function LoadingPanel() {
  return (
    <ScrollView
      style={{flex: 1}}
      horizontal
      showsHorizontalScrollIndicator={false}>
      <Container>
        <ShimmerPlaceHolder
          width={130}
          height={70}
          style={{
            borderRadius: 20,
            marginLeft: 10,
            marginRigth: 10,
            marginTop: 100,
            marginBottom: 55,
          }}
        />
        <ShimmerPlaceHolder
          width={130}
          height={70}
          style={{
            borderRadius: 20,
            marginLeft: 10,
            marginRigth: 10,
            marginTop: 100,
            marginBottom: 55,
          }}
        />
        <ShimmerPlaceHolder
          width={130}
          height={70}
          style={{
            borderRadius: 20,
            marginLeft: 10,
            marginRigth: 10,
            marginTop: 100,
            marginBottom: 55,
          }}
        />
      </Container>
    </ScrollView>
  );
}

export default LoadingPanel;
