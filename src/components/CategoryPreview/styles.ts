import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {height, width} = Dimensions.get('window');

interface MainContainerProps {
  left?: boolean;
}

export const MainContainer = styled.View<MainContainerProps>`
  /* border: 1px solid red; */
  width: 50%;
  height: 80px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  padding-bottom: 12px;
  padding-left: ${({left}) => (!left ? '0' : '12px')};
  padding-right: ${({left}) => (left ? '0' : '12px')};
`;

export const Container = styled.View`
  flex: 1;
  width: 100%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const BackgroundImage = styled.Image`
  flex: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
`;

export const Overlay = styled.View`
  flex: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  background-color: #00000050;
`;

export const Title = styled.Text`
  color: white;
  font-weight: bold;
  font-size: 16px;
`;
