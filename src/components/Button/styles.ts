import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

export const Container = styled(RectButton)`
  height: 45px;
  width: 140px;
  background: ${colors.button};
  border-radius: 4px;
  align-items: center;
  justify-content: center;
`;

export const Text = styled.Text`
  color: ${colors.text};
  font-size: 16px;
  font-family: ${fonts.primary};
`;
