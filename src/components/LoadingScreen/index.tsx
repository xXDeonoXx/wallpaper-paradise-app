import React from 'react';
import {ActivityIndicator} from 'react-native';
import getTheme from '../../../theme';
import {Container} from './styles';

const LoadingScreen = () => {
  const themeColors = getTheme();
  return (
    <Container>
      <ActivityIndicator size="large" color={themeColors.colors.primary} />
    </Container>
  );
};

export default LoadingScreen;
