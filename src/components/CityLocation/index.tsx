import React, {useState, useEffect, useContext} from 'react';
import Geolocation from 'react-native-geolocation-service';
import Geocoder from 'react-native-geocoding';
import {CityLocationName} from './styles';
import apiKeyGeocoder from '../../services/apiKey-geocoder';
import LoadingCity from '../LoadingComponents/LoadingCity';
import ConnectionInfoContext from '../../contexts/ConnectionInfoContext';

Geocoder.init(apiKeyGeocoder);

interface StateProps {
  currentPosition: [number, number] | null;
  setCurrentPosition: (type: [number, number]) => void | null;
}

function CityLocation({currentPosition, setCurrentPosition}: StateProps) {
  const connectionInfo = useContext(ConnectionInfoContext);

  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState('');

  async function getCity(latitude: number, longitude: number) {
    const response = await Geocoder.from({latitude, longitude});

    if (response.results[0]) {
      const components = response.results[0].address_components;

      for (let component = 0; component < components.length; component++) {
        if (components[component].types[0] === 'administrative_area_level_2') {
          const city: string = components[component].long_name;
          setAddress(city);
        }
        if (components[component].types[0] === 'administrative_area_level_1') {
          var state: string = components[component].short_name;
          setAddress((oldState) => `${oldState}-${state}`);
        }
      }
    }

    setLoading(false);
  }

  function getLocation() {
    setLoading(true);

    Geolocation.getCurrentPosition(
      async ({coords: {latitude, longitude}}: string | any) => {
        setCurrentPosition([latitude, longitude]);

        getCity(latitude, longitude);
      },
      (error: object) => {
        console.log(error);
        setLoading(false);
      },
      {enableHighAccuracy: true, maximumAge: 10000, timeout: 10000},
    );
  }

  useEffect(() => {
    if (!connectionInfo) {
      if (currentPosition === null) {
        getLocation();
      } else {
        getCity(currentPosition[0], currentPosition[1]);
      }
    }
  }, [currentPosition, connectionInfo]);

  return (
    <>
      {loading ? (
        <LoadingCity />
      ) : (
        <CityLocationName testID="city-text">{address}</CityLocationName>
      )}
    </>
  );
}

export default CityLocation;
