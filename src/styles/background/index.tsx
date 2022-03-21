import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';
import colors from '../colors';

export const Background = styled(LinearGradient).attrs({
  colors: [`${colors.primary}`, `${colors.second}`, `${colors.third}`],
  start: {x: 0, y: 0},
  end: {x: 1, y: 0},
})``;
