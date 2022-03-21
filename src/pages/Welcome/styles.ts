import styled from 'styled-components/native';
import colors from '../../styles/colors';
import {windowHeight} from '../../styles/dimensions';
import fonts from '../../styles/fonts';

export const Container = styled.View`
  width: 100%;
  height: 100%;
`;

export const ContainerLogo = styled.View`
  width: 100%;
  height: ${`${windowHeight - 300}px`};
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image`
  width: 160px;
  height: 160px;
`;

export const ContainerDescription = styled.View`
  width: 100%;
  height: auto;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

export const TextDescription = styled.Text`
  font-family: ${fonts.primary};
  font-size: 18px;
  color: ${colors.captions};
  text-align: center;
`;

export const ContainerButton = styled.View`
  width: 100%;
  height: auto;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
