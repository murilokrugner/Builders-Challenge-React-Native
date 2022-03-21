import React from 'react';
import {ContainerButtonRefresh, ImageRefresh} from './styles';
import plus from '../../../assets/plus.png';

interface ButtonPros {
  navigationNewLocation: () => void;
}

function ButtonPlus({navigationNewLocation}: ButtonPros) {
  return (
    <ContainerButtonRefresh
      testID="container-button"
      onPress={navigationNewLocation}>
      <ImageRefresh source={plus} />
    </ContainerButtonRefresh>
  );
}

export default ButtonPlus;
