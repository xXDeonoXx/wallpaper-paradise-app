import styled from 'styled-components/native';

interface ContainerProps {
  isLeft?: boolean;
}

export const Container = styled.TouchableOpacity<ContainerProps>`
  margin: ${({isLeft}) => (isLeft ? '0px 8px 8px 0px' : '0px 16px 8px 0px')};
`;

export const Image = styled.Image`
  height: 220px;
  width: 140px;
  border-radius: 10px;
`;
