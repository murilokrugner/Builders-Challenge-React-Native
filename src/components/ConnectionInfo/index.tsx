import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import NetInfo from '@react-native-community/netinfo';
import StatusBarAlert from 'react-native-statusbar-alert';
import {Container} from './styles';
import colors from '../../styles/colors';

interface Props {
  isConnectionAlert: boolean;
  setIsConnectionAlert: (type: boolean) => void;
}

function ConnectionInfo({isConnectionAlert, setIsConnectionAlert}: Props) {
  useEffect(() => {
    NetInfo.addEventListener((state) => {
      if (state.isConnected) {
        setIsConnectionAlert(false);
      } else {
        setIsConnectionAlert(true);
      }
    });
  });

  return (
    <Container testID="container-connection-info">
      <SafeAreaView style={{flex: 1}}>
        <StatusBarAlert
          visible={isConnectionAlert}
          message="Sem conexão com a internet"
          backgroundColor={colors.error}
          color="white"
        />
      </SafeAreaView>
    </Container>
  );
}

export default ConnectionInfo;
