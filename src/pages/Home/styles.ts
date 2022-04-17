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

export const ImageCarousel = styled.ScrollView`
  width: 100%;
  padding-left: 16px;
`;

export const CategoriesWrapper = styled.View`
  flex-direction: row;
  flex-wrap: wrap;
  padding: 0px 16px;
  justify-content: space-between;
`;
