import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

export default (reducers) => {
  const persistedReducer = persistReducer(
    {
      key: 'builderschallengern',
      storage: AsyncStorage,
      whitelist: ['weathers', 'cities'],
    },
    reducers,
  );

  return persistedReducer;
};
