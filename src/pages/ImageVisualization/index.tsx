import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {PermissionsAndroid} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import RnManageWallpaper from 'rn-manage-wallpaper';
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

  const handleSetAs = () => {
    const writeGranted = PermissionsAndroid.request(
      'android.permission.WRITE_EXTERNAL_STORAGE',
      {
        title: 'Wallpaper Paradise Storage Permission',
        message:
          'Wallpaper Paradise needs access to your storage ' +
          'to save the wallpapers images',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    const readGranted = PermissionsAndroid.request(
      'android.permission.READ_EXTERNAL_STORAGE',
      {
        title: 'Wallpaper Paradise Storage Permission',
        message:
          'Wallpaper Paradise needs access to your storage ' +
          'to read the wallpapers images',
        buttonNegative: 'Cancel',
        buttonPositive: 'OK',
      },
    );
    if (!writeGranted || !readGranted) {
      console.log('permissão negada');
      return;
    }
    RNFetchBlob.config({
      // add this option that makes response data to be stored as a file,
      // this is much more performant.
      fileCache: true,
    })
      .fetch('GET', image.url, {
        //some headers ..
      })
      .then(res => {
        try {
          RnManageWallpaper.setWallpaper(`${res.path()}`, 2);
        } catch (error) {
          console.log(error);
        }
      });
  };

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
