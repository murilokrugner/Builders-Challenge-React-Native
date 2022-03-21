import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import React from 'react';
import LottieView from 'lottie-react-native';
import logo from '../../assets/logo.png';
import Button from '../../components/Button';
import {setValue} from '../../functions/asyncStorage';
import {Background} from '../../styles/background';
import {
  Container,
  ContainerButton,
  ContainerDescription,
  ContainerLogo,
  Logo,
  TextDescription,
} from './styles';
import WeatherGif from '../../assets/weather-icon.json';

function Welcome({navigation}: NativeStackHeaderProps) {
  async function handleNavigation() {
    await setValue('firstAccess', 'false');

    navigation.navigate('Home');
  }

  return (
    <Background>
      <Container>
        <ContainerLogo>
          <LottieView source={WeatherGif} autoPlay loop play={(0, 100)} />
        </ContainerLogo>

        <ContainerDescription>
          <TextDescription>Seja bem vindo(a)!</TextDescription>
          <TextDescription>Vamos te informar sobre o clima</TextDescription>
        </ContainerDescription>

        <ContainerButton>
          <Button loading={false} onPress={handleNavigation}>
            Continuar
          </Button>
        </ContainerButton>
      </Container>
    </Background>
  );
}

export default Welcome;
