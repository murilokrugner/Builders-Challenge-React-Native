import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SplashScreen from 'react-native-splash-screen';
import ApplicationPages from './Router/ApplicationPages';
import {getStoredItem} from './functions/asyncStorage';

interface StateProps {
  setInitialState: (type: string) => void;
}

export default function Routes() {
  const [loading, setLoading] = useState(true);
  const [initialRoute, setInitialState] = useState<string | StateProps>('true');

  async function getStorage() {
    setLoading(true);

    const statusStorage = await getStoredItem('firstAccess');

    setInitialState(statusStorage);

    setLoading(false);
    SplashScreen.hide();
  }

  useEffect(() => {
    getStorage();
  }, []);

  return (
    <NavigationContainer independent>
      {!loading && <ApplicationPages initialRoute={initialRoute} />}
    </NavigationContainer>
  );
}
