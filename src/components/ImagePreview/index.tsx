import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {imageVisualizationProps} from '../../pages/ImageVisualization';
import {StackParamList} from '../../routes/app.routes';
import {Container, Image} from './styles';

interface ImagePreviewProps {
  isLeft?: boolean;
  imageUrl: string;
  title: string;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({
  imageUrl,
  title,
  isLeft,
}) => {
  const navigation = useNavigation<imageVisualizationProps>();

  return (
    <Container
      onPress={() => {
        navigation.navigate('ImageVisualization', {imageUrl});
      }}>
      <Image source={{uri: imageUrl}} resizeMode={'cover'} />
    </Container>
  );
};

export default ImagePreview;
