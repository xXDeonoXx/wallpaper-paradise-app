import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import CategoryPreview from '../../components/CategoryPreview';
import ImagePreview from '../../components/ImagePreview';
import {
  BoldTitle,
  CategoriesWrapper,
  Container,
  ImageCarousel,
  ScrollView,
} from './styles';

const Home: React.FC = () => {
  const imageUrl = 'https://wallpaperaccess.com/full/1998781.jpg';

  return (
    <Container>
      <ScrollView>
        <BoldTitle>Best of the Week</BoldTitle>
        <ImageCarousel
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingRight: 16}}>
          <ImagePreview title="" imageUrl={imageUrl} />
          <ImagePreview
            title=""
            imageUrl={
              'https://i.pinimg.com/originals/c3/d7/2d/c3d72d99ea26f7b9b83b7a0e6e3736f2.jpg'
            }
          />
          <ImagePreview title="" imageUrl={imageUrl} />
          <ImagePreview title="" imageUrl={imageUrl} />
          <ImagePreview title="" imageUrl={imageUrl} />
          <ImagePreview title="" imageUrl={imageUrl} />
        </ImageCarousel>
        <BoldTitle>Newest</BoldTitle>
        <ImageCarousel
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{paddingRight: 16}}>
          <ImagePreview title="" imageUrl={imageUrl} />
          <ImagePreview title="" imageUrl={imageUrl} />
          <ImagePreview title="" imageUrl={imageUrl} />
          <ImagePreview title="" imageUrl={imageUrl} />
          <ImagePreview title="" imageUrl={imageUrl} />
          <ImagePreview title="" imageUrl={imageUrl} />
        </ImageCarousel>
        <BoldTitle>Categories</BoldTitle>
        <CategoriesWrapper>
          <CategoryPreview />
          <CategoryPreview />
          <CategoryPreview />
          <CategoryPreview />
          <CategoryPreview />
          <CategoryPreview />
          <CategoryPreview />
          <CategoryPreview />
        </CategoriesWrapper>
      </ScrollView>
    </Container>
  );
};

export default Home;
