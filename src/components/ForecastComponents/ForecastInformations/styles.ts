import styled from 'styled-components/native';
import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 100%;
  height: auto;
`;

export const ContainerInformation = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  width: 100px;
  height: 50px;
`;

export const TitleInformation = styled.Text`
  font-family: ${fonts.primary};
  font-size: 16px;
  color: ${colors.captions};
`;

export const TempInformation = styled.Text`
  font-family: ${fonts.primary};
  font-weight: bold;
  font-size: 23px;
  color: ${colors.captions};
`;

export const Information = styled.Text`
  font-family: ${fonts.primary};
  font-weight: bold;
  font-size: 18px;
  color: ${colors.captions};
`;
