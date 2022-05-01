import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import MyButton from '../../components/Button';
import {StackParamList} from '../../routes/app.routes';
import {
  Container,
  Image,
  ImageTitle,
  OverlayContainerBottom,
  OverlayContainerTop,
} from './styles';

export type imageVisualizationProps = StackNavigationProp<
  StackParamList,
  'ImageVisualization'
>;

const ImageVisualization = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<StackParamList, 'ImageVisualization'>>();
  const [image] = useState(route?.params?.image);

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSetAs = () => {};

  return (
    <Container>
      {image && <Image source={{uri: image.url}} />}
      <OverlayContainerTop>
        <ImageTitle>
          {image.title} by {image.uploader.nickname}
        </ImageTitle>
      </OverlayContainerTop>
      <OverlayContainerBottom>
        <MyButton label="BACK" onPress={handleBack} />
        <MyButton label="SET AS" onPress={handleSetAs} />
      </OverlayContainerBottom>
    </Container>
  );
};

export default ImageVisualization;
