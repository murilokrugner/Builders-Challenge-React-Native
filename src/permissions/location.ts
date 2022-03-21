import {Alert, Linking, Platform, PermissionsAndroid} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import {check, PERMISSIONS, RESULTS} from 'react-native-permissions';

async function alertRequestLocation() {
  Alert.alert(
    'Permissão de Localização',
    'O app precisa da sua localização para informar o clima',
    [
      {
        text: 'Recusar',
        onPress: () => {
          Linking.openSettings();
        },
        style: 'cancel',
      },
      {
        text: 'Aceitar',
        onPress: async () => {
          await Geolocation.requestAuthorization();
        },
      },
    ],
  );
}

async function requestPermissionLocation() {
  const granted = await PermissionsAndroid.request(
    PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    {
      title: 'Permissão de Localização',
      message: 'O App precisa de acesso à Localização',
      buttonNeutral: 'Pergunte-me depois',
      buttonNegative: 'Cancelar',
      buttonPositive: 'OK',
    },
  );

  if (granted === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
    alertRequestLocation();
  } else if (granted === PermissionsAndroid.RESULTS.DENIED) {
    alertRequestLocation();
  }
}

async function requestLocationIos() {
  check(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE)
    .then(async (result) => {
      switch (result) {
        case RESULTS.UNAVAILABLE:
          alertRequestLocation();
          break;
        case RESULTS.DENIED:
          alertRequestLocation();
          break;
        case RESULTS.GRANTED:
          break;
        case RESULTS.BLOCKED:
          alertRequestLocation();
          break;
      }
    })
    .catch((error) => {
      console.log(error);
    });
}

async function location() {
  if (Platform.OS === 'android') {
    requestPermissionLocation();
  } else {
    requestLocationIos();
  }
}

export default location;
