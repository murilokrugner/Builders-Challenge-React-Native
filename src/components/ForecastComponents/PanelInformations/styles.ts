import styled from 'styled-components/native';

import fonts from '../../../styles/fonts';
import colors from '../../../styles/colors';

export const Container = styled.View`
  width: 100%;
  height: auto;

  margin-top: 20px;
`;

export const ContainerTitle = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: auto;
`;

export const Title = styled.Text`
  font-family: ${fonts.italic};
  font-weight: bold;
  font-size: 18px;
  color: ${colors.captions};

  margin-left: 20px;
`;

export const ContainerForest = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  background-color: ${colors.panel};
  width: 130px;
  height: 70px;

  border-radius: 20px;

  margin-top: 20px;
  margin-bottom: 55px;
  margin-right: 10px;
  margin-left: 10px;
`;

export const ImageForest = styled.Image`
  width: 45px;
  height: 45px;
`;

export const Forest = styled.View`
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

export const Hour = styled.Text`
  font-family: ${fonts.primary};
  font-size: 15px;
  color: ${colors.text};
`;

export const Temperature = styled.Text`
  font-family: ${fonts.primary};
  font-size: 15px;
  color: ${colors.text};
`;
