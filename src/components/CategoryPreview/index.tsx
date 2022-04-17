import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {
  Container,
  MainContainer,
  Title,
  BackgroundImage,
  Overlay,
} from './styles';

const index = () => {
  return (
    <MainContainer>
      <Container>
        <BackgroundImage
          source={{
            uri: 'https://p2.trrsf.com/image/fget/cf/1200/675/middle/images.terra.com/2021/09/10/demon-slayer-capa.png',
          }}
        />
        <Overlay />
        <Title>Anime</Title>
      </Container>
    </MainContainer>
  );
};

export default index;
