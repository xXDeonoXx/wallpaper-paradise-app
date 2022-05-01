import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  height: 100%;
  background-color: ${({theme}) => theme.colors.background};
`;

export const ScrollWrapper = styled.View`
  flex: 1;
`;

export const ScrollList = styled.FlatList`
  width: 100%;
  height: 100%;
  flex: 1;
`;
