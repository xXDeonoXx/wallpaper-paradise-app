import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {height, width} = Dimensions.get('window');

interface MainContainerProps {
  left?: boolean;
}

export const Image = styled.Image``;
