import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import SearchPlaces from '../../components/SearchPlaces';
import {Background} from '../../styles/background';
import {Container, ContainerPlaces} from './styles';
import ForecastCity from '../../components/ForecastComponents/ForecastCity';
import {updateCitiesRequest} from '../../store/modules/cities/actions';

interface localSelectedTypes {
  data: object | any;
  geometry: object;
}

function NewLocation() {
  const dispatch = useDispatch();

  function saveCityOffline(data) {
    dispatch(updateCitiesRequest(data));
  }

  function handleLocationSelected(data, {geometry}: localSelectedTypes) {
    const {
      location: {lat: latitude, lng: longitude},
    } = geometry;

    const dataWeather = {
      currentPosition: [latitude, longitude],
    };

    saveCityOffline(dataWeather);
  }

  return (
    <Background>
      <Container>
        <ContainerPlaces testID="container-new-location">
          <SearchPlaces onLocationSelected={handleLocationSelected} />
          <ForecastCity />
        </ContainerPlaces>
      </Container>
    </Background>
  );
}

export default NewLocation;
