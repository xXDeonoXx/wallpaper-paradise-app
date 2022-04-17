import {RouteProp, useRoute} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {StackParamList} from '../../routes/app.routes';
import {Container, Image} from './styles';

export type imageVisualizationProps = StackNavigationProp<
  StackParamList,
  'ImageVisualization'
>;

const ImageVisualization = () => {
  const route = useRoute<RouteProp<StackParamList, 'ImageVisualization'>>();
  const imageUrl = 'https://wallpaperaccess.com/full/1998781.jpg';

  return (
    <Container>
      {route?.params?.imageUrl && (
        <Image source={{uri: route.params.imageUrl}} />
      )}
    </Container>
  );
};

export default ImageVisualization;
