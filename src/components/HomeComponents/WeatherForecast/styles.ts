import styled from 'styled-components/native';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';

export const ContainerForecast = styled.View`
  width: 100%;
  height: 600px;

  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const ImageForecast = styled.Image`
  width: 200px;
  height: 200px;
`;

export const TextWeather = styled.Text`
  font-size: 18px;
  font-family: ${fonts.primary};
  font-weight: bold;

  color: ${colors.captions};
`;
