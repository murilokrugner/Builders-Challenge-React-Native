import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';

import {format, eachHourOfInterval} from 'date-fns';
import pt from 'date-fns/locale/pt';
import addHours from 'date-fns/addHours';
import {
  Container,
  ContainerTitle,
  Title,
  ContainerForest,
  ImageForest,
  Forest,
  Hour,
  Temperature,
} from './styles';

interface PropsInformations {
  painelInformation:
    | {
        temp: number;
        dt: number;
        weather: [
          {
            icon: string;
          },
        ];
      }[]
    | null;
}

function PanelInformations({painelInformation}: PropsInformations) {
  const [hours, setHours] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  function convertHour() {
    setLoading(true);
    const finalDate = addHours(new Date(), 48);

    const result = eachHourOfInterval({
      start: new Date(),
      end: finalDate,
    });

    result.map((hour) => {
      const convertHours = format(hour, 'HH:mm', {locale: pt});
      setHours((oldState) => [...oldState, convertHours]);
    });

    setLoading(false);
  }

  useEffect(() => {
    if (painelInformation !== null) {
      convertHour();
    }
  }, [painelInformation]);

  return (
    <Container testID="container-panel-informations">
      <ContainerTitle>
        <Title>Previsão para 48 horas</Title>
      </ContainerTitle>

      {painelInformation !== null && (
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={painelInformation}
          keyExtractor={(item) => String(item.dt)}
          renderItem={({item, index}) => (
            <ContainerForest>
              <ImageForest
                source={{
                  uri: `https://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
                }}
              />

              <Forest>
                {!loading && <Hour>{hours[index]}</Hour>}
                <Temperature>
                  {item.temp.toFixed(0)}
                  °c
                </Temperature>
              </Forest>
            </ContainerForest>
          )}
        />
      )}
    </Container>
  );
}

export default PanelInformations;
