import styled from 'styled-components/native';

export const Button = styled.TouchableOpacity`
  border: 1px solid;
  border-color: ${({theme}) => theme.colors.primary};
  padding: 8px 8px;
  border-radius: 8px;
  height: 48px;
  min-width: 120px;
  justify-content: center;
  align-items: center;
`;

export const Label = styled.Text`
  color: white;
  font-weight: 500;
`;
