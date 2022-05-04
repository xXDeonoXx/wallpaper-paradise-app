import {RouteProp, useNavigation, useRoute} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {useState} from 'react';
import {Alert, PermissionsAndroid, ToastAndroid} from 'react-native';
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
  const constants = RnManageWallpaper.getConstants();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleSetAs = async () => {
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
    let imagePath: string = '';

    await RNFetchBlob.config({
      // add this option that makes response data to be stored as a file,
      // this is much more performant.
      fileCache: true,
    })
      .fetch('GET', image.url, {
        //some headers ..
      })
      .then(res => {
        try {
          imagePath = res.path();
        } catch (error) {
          console.log(error);
        }
      });

    // error
    if (!imagePath.length) return;
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Home Screen',
          onPress: () => setWallpaper(imagePath, constants.FLAG_SYSTEM),
          style: 'default',
        },
        {
          text: 'Lock Screen',
          onPress: () => setWallpaper(imagePath, constants.FLAG_LOCK),
          style: 'default',
        },
        {
          text: 'Cancel',
          // onPress: () => Alert.alert('Cancel Pressed'),
          style: 'cancel',
        },
      ],
      {
        cancelable: true,
      },
    );
  };

  const setWallpaper = (path: string, flag: number) => {
    try {
      RnManageWallpaper.setWallpaper(`${path}`, flag);
      ToastAndroid.showWithGravityAndOffset(
        'Wallpaper successfully set',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    } catch (error) {
      ToastAndroid.showWithGravityAndOffset(
        'Failed to set wallpaper',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
        25,
        50,
      );
    }
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
