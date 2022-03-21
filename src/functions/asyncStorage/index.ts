import AsyncStorage from '@react-native-community/async-storage';

async function getStoredItem(key: string) {
  try {
    const item = await AsyncStorage.getItem(key);
    return item;
  } catch (error) {
    console.log(error);
  }
}

const setValue = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

export {getStoredItem, setValue};
