import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: #dbeaf1;

  /* width: 100%; */
`;

export const ScrollView = styled.ScrollView``;

export const BoldTitle = styled.Text`
  font-weight: bold;
  font-size: 16px;
  padding: 12px 16px;
  color: black;
`;

export const Image = styled.Image`
  width: 100%;
  flex: 1;
`;

export const OverlayContainerBottom = styled.View`
  background-color: #000000c0;
  position: absolute;
  width: 100%;
  height: 80px;
  bottom: 0;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const OverlayContainerTop = styled.View`
  background-color: #000000c0;
  position: absolute;
  width: 100%;
  height: 30px;
  top: 0;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;

export const ImageTitle = styled.Text`
  color: white;
`;
