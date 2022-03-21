import React, {useState, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {withNavigationFocus} from '@react-navigation/compat';
import Header from '../../components/HomeComponents/Header';
import WeatherForecast from '../../components/HomeComponents/WeatherForecast';
import {Background} from '../../styles/background';
import {Container, ContainerHome, ContainerHeader} from './styles';
import ButtonRefresh from '../../components/ForecastComponents/ButtonRefresh';
import ButtonPlus from '../../components/ForecastComponents/ButtonPlus';

interface Props {
  navigation: {
    navigate: (value: string) => void;
  };
  route: {
    params: [];
  };
  isFocused: boolean;
}

function Home({navigation, route, isFocused}: Props) {
  const [currentPosition, setCurrentPosition] = useState<number[] | null>(null);
  const [pressButtonRefresh, setPressButtonRefresh] = useState(true);

  function navigationNewLocation() {
    navigation.navigate('NewLocation');
  }

  const positionParams = route.params;

  useEffect(() => {
    if (isFocused) {
      if (positionParams) {
        setCurrentPosition(positionParams);
        setPressButtonRefresh(true);
      }
    }
  }, [isFocused, currentPosition]);

  return (
    <Background>
      <Container>
        <ScrollView showsVerticalScrollIndicator={false} style={{flex: 1}}>
          <ContainerHome>
            <ContainerHeader>
              <Header
                currentPosition={currentPosition}
                setCurrentPosition={setCurrentPosition}
              />
              <ButtonRefresh setPressButtonRefresh={setPressButtonRefresh} />
              <ButtonPlus navigationNewLocation={navigationNewLocation} />
            </ContainerHeader>

            <WeatherForecast
              currentPosition={currentPosition}
              pressButtonRefresh={pressButtonRefresh}
              setPressButtonRefresh={setPressButtonRefresh}
            />
          </ContainerHome>
        </ScrollView>
      </Container>
    </Background>
  );
}

export default withNavigationFocus(Home);
