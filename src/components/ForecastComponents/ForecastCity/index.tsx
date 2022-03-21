import React, {useState, useEffect} from 'react';
import {FlatList, Alert} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import LoadingSearchLocation from '../../LoadingComponents/LoadingSearchLocation';
import CityLocation from '../../CityLocation';
import {removeCity} from '../../../store/modules/cities/actions';
import {
  Container,
  ContainerCities,
  ContainerCity,
  InformationCity,
  ContainerTemperature,
  Temperature,
} from './styles';
import api from '../../../services/api-open-weather';
import apiKey from '../../../services/apiKey-open-weather';

type navigationProps = {
  navigate: (value: string, value2: [number, number] | null) => void;
};

interface Cities {
  cities: {
    currentPosition: [latitude: number, longitude: number];
    map: (data: object) => [];
    length: number;
  };
}
interface CitiesMap {
  currentPosition: [latitude: number, longitude: number];
}
interface Data {
  item: {
    currentPosition: [latitude: number, longitude: number];
    weather: {
      weather: [
        {
          description: string;
        },
      ];
      temp: string;
    };
  };
}

function ForecastCity() {
  const dispatch = useDispatch();
  const navigation = useNavigation<navigationProps>();
  const citiesData = useSelector((state: Cities) => state.cities);

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  function handleRemoveCity(index: number) {
    Alert.alert('Exclui cidade', `Deseja realmente excluir essa cidade?`, [
      {
        text: 'Não',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => {
          dispatch(removeCity(index));
        },
      },
    ]);
  }

  async function getForecastCity() {
    setData([]);
    setLoading(true);
    try {
      citiesData.map(async (item: CitiesMap) => {
        const response = await api.get(
          `onecall?lat=${item.currentPosition[0]}&lon=${item.currentPosition[1]}&exclude=alerts,minutely,daily,hourly&appid=${apiKey}&units=metric&lang=pt_br`,
        );

        const weatherData = {
          weather: response.data.current,
          currentPosition: item.currentPosition,
        };

        setData((oldState) => [...oldState, weatherData]);

        setLoading(false);
      });
    } catch (error) {
      Alert.alert('Erro ao carregar dados');

      setLoading(false);
    }
  }

  useEffect(() => {
    if (citiesData.length !== 0) {
      getForecastCity();
    } else {
      setData([]);
    }
  }, [citiesData]);

  return (
    <>
      {loading ? (
        <LoadingSearchLocation />
      ) : (
        <Container>
          {data.length !== 0 && (
            <FlatList
              showsVerticalScrollIndicator={false}
              data={data}
              key={Math.round(100)}
              renderItem={({item, index}: Data) => {
                return (
                  <ContainerCities
                    testID="container-forecast-city"
                    onLongPress={() => {
                      handleRemoveCity(index);
                    }}
                    onPress={() => {
                      navigation.navigate('Home', item.currentPosition);
                    }}>
                    <ContainerCity>
                      <CityLocation
                        currentPosition={item.currentPosition}
                        setCurrentPosition={null}
                      />
                      <InformationCity>
                        Clima:{' '}
                        {item.weather.weather[0].description.toUpperCase()}
                      </InformationCity>
                    </ContainerCity>
                    <ContainerTemperature>
                      <Temperature>
                        {item.weather.temp.toFixed(0)}
                        °c
                      </Temperature>
                    </ContainerTemperature>
                  </ContainerCities>
                );
              }}
            />
          )}
        </Container>
      )}
    </>
  );
}

export default ForecastCity;
