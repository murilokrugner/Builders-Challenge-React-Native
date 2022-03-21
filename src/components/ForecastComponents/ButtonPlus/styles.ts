import styled from 'styled-components/native';
import {windowWidth} from '../../../styles/dimensions';

export const ContainerButtonRefresh = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  position: absolute;
  left: ${`${windowWidth / 12}px`};
`;

export const ImageRefresh = styled.Image`
  width: 26px;
  height: 26px;
`;
