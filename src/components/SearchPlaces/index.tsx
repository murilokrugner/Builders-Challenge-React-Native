import React, {useState} from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import apiKeyGooglePlaces from '../../services/apiKey-google-places';
import colors from '../../styles/colors';

interface Props {
  onLocationSelected: () => void | [];
}

function SearchPlaces({onLocationSelected}: Props) {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <GooglePlacesAutocomplete
      placeholder="Nome da cidade"
      onPress={onLocationSelected}
      query={{
        key: apiKeyGooglePlaces,
        language: 'pt',
      }}
      textInputProps={{
        placeholderTextColor: '#fff',
        onFocus: () => {
          setSearchFocused(true);
        },
        onBlur: () => {
          setSearchFocused(false);
        },
        autoCapitalize: 'none',
        autoCorrect: false,
      }}
      listViewDisplayed={searchFocused}
      fetchDetails
      enablePoweredByContainer={false}
      styles={{
        container: {
          top: 10,
          width: '100%',
          position: 'absolute',
        },
        textInputContainer: {
          flex: 1,
          backgroundColor: 'transparent',
          height: 54,
          marginHorizontal: 20,
          borderTopWidth: 0,
          borderBottomWidth: 0,
        },
        textInput: {
          backgroundColor: colors.primary,
          height: 65,
          margin: 0,
          borderRadius: 5,
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 20,
          paddingRight: 20,
          marginTop: 0,
          marginLeft: 0,
          marginRight: 0,
          elevation: 5,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: {x: 0, y: 0},
          shadowRadius: 15,
          borderWidth: 1,
          borderColor: colors.second,
          fontSize: 18,
          color: colors.captions,
        },
        listView: {
          borderWidth: 1,
          borderColor: '#ddd',
          backgroundColor: colors.captions,
          marginHorizontal: 20,
          elevation: 5,
          shadowColor: '#000',
          shadowOpacity: 0.1,
          shadowOffset: {x: 0, y: 0},
          shadowRadius: 15,
          marginTop: 10,
          height: 60,
        },
        description: {
          fontSize: 16,
          color: '#000',
        },
        row: {
          padding: 20,
          height: 58,
          backgroundColor: '#fff',
        },
      }}
    />
  );
}

export default SearchPlaces;
