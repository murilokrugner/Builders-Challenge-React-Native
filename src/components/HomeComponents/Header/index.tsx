import React from 'react';
import {SafeAreaView} from 'react-native';
import CityLocation from '../../CityLocation';
import DateNow from '../../DateNow';
import {Container} from './styles';

interface StateProps {
  currentPosition: [] | any;
  setCurrentPosition: (type: [number, number]) => void;
}

function Header({currentPosition, setCurrentPosition}: StateProps) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Container testID="container-header">
        <CityLocation
          currentPosition={currentPosition}
          setCurrentPosition={setCurrentPosition}
        />
        <DateNow />
      </Container>
    </SafeAreaView>
  );
}

export default Header;
