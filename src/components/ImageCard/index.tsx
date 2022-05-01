import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {TouchableOpacity} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import {StackParamList} from '../../routes/app.routes';
import ImageEntry from '../../shared/interfaces/image.interface';
import {Image} from './styles';

type ImageVisualizationScreenType = StackNavigationProp<
  StackParamList,
  'ImageVisualization'
>;

export interface ImageCardProps {
  image: ImageEntry;
}

const ImageCard = ({image}: ImageCardProps) => {
  const navigation = useNavigation<ImageVisualizationScreenType>();
  const tailwind = useTailwind();
  return (
    <TouchableOpacity
      style={tailwind(`w-1/2 h-64 border`)}
      onPress={() => {
        navigation.navigate('ImageVisualization', {image: image});
      }}>
      <Image
        style={{...tailwind(`w-full h-full`)}}
        source={{
          uri: image.url,
        }}
        resizeMode="cover"
      />
    </TouchableOpacity>
  );
};

export default ImageCard;
