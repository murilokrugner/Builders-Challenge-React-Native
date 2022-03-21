import React, {useEffect, useState, useContext} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateWeathersRequest} from '../../../store/modules/weathers/actions';
import PanelInformations from '../../ForecastComponents/PanelInformations';
import {ContainerForecast, ImageForecast, TextWeather} from './styles';
import ForecastInformations from '../../ForecastComponents/ForecastInformations';
import apiKey from '../../../services/apiKey-open-weather';
import api from '../../../services/api-open-weather';
import LoadingPanel from '../../LoadingComponents/LoadingPanel';
import LoadingWeatherInformations from '../../LoadingComponents/LoadingWeatherInformations';
import LoadingImage from '../../LoadingComponents/LoadingImage';
import ConnectionInfoContext from '../../../contexts/ConnectionInfoContext';

interface Props {
  currentPosition: [] | any | null;
  pressButtonRefresh: boolean;
  setPressButtonRefresh: (type: boolean) => void;
}

interface DataWeather {
  weathers: {
    data: {
      current: {
        weather: [
          {
            description: string;
            icon: string;
          },
        ];
      };
      hourly: [];
    };
  };
}

function WeatherForecast({
  currentPosition,
  pressButtonRefresh,
  setPressButtonRefresh,
}: Props) {
  const dispatch = useDispatch();
  const connectionInfo = useContext(ConnectionInfoContext);

  const [loading, setLoading] = useState(true);
  const [icon, setIcon] = useState('');
  const [currentWeather, setCurrentWeather] = useState('');
  const [weatherInformations, setWeatherInformations] = useState(null);
  const [painelInformation, setPainelInformation] = useState(null);
  const weatherData = useSelector((state: DataWeather) => state.weathers.data);

  function getForecastWeatherOffline() {
    setLoading(true);

    setIcon(
      `https://openweathermap.org/img/wn/${weatherData.current.weather[0].icon}.png`,
    );
    setCurrentWeather(weatherData.current.weather[0].description.toUpperCase());

    setWeatherInformations(weatherData.current);
    setPainelInformation(weatherData.hourly);
    setPressButtonRefresh(false);
    setLoading(false);
  }

  async function getForecastWeather() {
    try {
      setLoading(true);
      const response = await api.get(
        `onecall?lat=${currentPosition[0]}&lon=${currentPosition[1]}&exclude=alerts,minutely,daily&appid=${apiKey}&units=metric&lang=pt_br`,
      );
      setIcon(
        `https://openweathermap.org/img/wn/${response.data.current.weather[0].icon}.png`,
      );
      setCurrentWeather(
        response.data.current.weather[0].description.toUpperCase(),
      );
      setWeatherInformations(response.data.current);
      setPainelInformation(response.data.hourly);
      setPressButtonRefresh(false);

      dispatch(updateWeathersRequest(response.data));

      setLoading(false);
    } catch (error) {
      Alert.alert('Erro ao carregar os dados');
      setLoading(false);
    }
  }

  useEffect(() => {
    if (currentPosition !== null && pressButtonRefresh) {
      if (connectionInfo) {
        getForecastWeatherOffline();
      } else {
        getForecastWeather();
      }
    }
  }, [currentPosition, pressButtonRefresh]);

  return (
    <ContainerForecast testID="container-weather-forecast">
      {loading ? (
        <LoadingImage />
      ) : (
        <>
          <ImageForecast source={{uri: icon}} />
          <TextWeather>{currentWeather}</TextWeather>
        </>
      )}

      {loading ? (
        <LoadingWeatherInformations />
      ) : (
        <ForecastInformations weatherInformations={weatherInformations} />
      )}

      {loading ? (
        <LoadingPanel />
      ) : (
        <PanelInformations painelInformation={painelInformation} />
      )}
    </ContainerForecast>
  );
}

export default WeatherForecast;
