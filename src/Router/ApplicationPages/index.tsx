import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LinearGradient from 'react-native-linear-gradient';
import Home from '../../pages/Home';
import NewLocation from '../../pages/NewLocation';
import Welcome from '../../pages/Welcome';
import colors from '../../styles/colors';

const Stack = createStackNavigator();
interface Props {
  initialRoute: string;
}

export default function ApplicationPages({initialRoute}: Props) {
  return (
    <NavigationContainer independent>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {elevation: 0},
        }}
        initialRouteName={initialRoute === 'false' ? 'Home' : 'Welcome'}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="NewLocation"
          component={NewLocation}
          options={{
            headerShown: true,
            headerTitle: 'Adicionar nova localização',
            headerBackTitle: 'Voltar',
            headerTintColor: colors.captions,
            headerBackground: () => (
              <LinearGradient
                colors={[
                  `${colors.primary}`,
                  `${colors.second}`,
                  `${colors.third}`,
                ]}
                style={{flex: 1}}
                start={{x: 0, y: 0}}
                end={{x: 1, y: 0}}
              />
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
