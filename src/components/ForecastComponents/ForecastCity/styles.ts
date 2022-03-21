import styled from 'styled-components/native';
import colors from '../../../styles/colors';
import fonts from '../../../styles/fonts';
import {windowWidth} from '../../../styles/dimensions';

export const Container = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: column;

  justify-content: space-around;
  align-items: center;

  margin-top: 220px;
`;

export const ContainerCities = styled.TouchableOpacity`
  width: ${`${windowWidth - 50}px`};
  height: 120px;

  background-color: ${colors.panel};
  border-radius: 20px;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  margin-top: 20px;
`;

export const ContainerCity = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  height: 70px;
  width: 200px;
`;

export const InformationCity = styled.Text`
  font-family: ${fonts.primary};
  font-size: 14px;

  color: ${colors.captions};
`;

export const ContainerTemperature = styled.View`
  width: 80px;
  height: auto;
`;

export const Temperature = styled.Text`
  font-family: ${fonts.primary};
  font-size: 34px;

  color: ${colors.captions};
`;
