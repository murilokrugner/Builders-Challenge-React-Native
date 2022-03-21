import React from 'react';
import {
  Container,
  ContainerInformation,
  TitleInformation,
  TempInformation,
  Information,
} from './styles';

interface PropsWeather {
  weatherInformations: {
    temp: number;
    humidity: number;
    wind_speed: number;
  } | null;
}

function ForecastInformations({weatherInformations}: PropsWeather) {
  return (
    <Container>
      {weatherInformations !== null && (
        <>
          <ContainerInformation testID="container-forecast-informations">
            <TitleInformation>Vento</TitleInformation>
            <Information>
              {weatherInformations.wind_speed.toFixed(1)}
              km/h
            </Information>
          </ContainerInformation>

          <ContainerInformation>
            <TitleInformation>Temp</TitleInformation>
            <TempInformation>
              {weatherInformations.temp.toFixed(0)}
              °c
            </TempInformation>
          </ContainerInformation>

          <ContainerInformation>
            <TitleInformation>Umidade</TitleInformation>
            <Information>{weatherInformations.humidity}%</Information>
          </ContainerInformation>
        </>
      )}
    </Container>
  );
}

export default ForecastInformations;
