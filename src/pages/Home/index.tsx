import React, {useEffect, useState} from 'react';
import {ActivityIndicator, ListRenderItem, View} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import ImageCard, {ImageCardProps} from '../../components/ImageCard';
import api from '../../services/api';
import ImageEntry from '../../shared/interfaces/image.interface';
import {Container, ScrollList, ScrollWrapper} from './styles';

const Home: React.FC = () => {
  const tailwind = useTailwind();
  const [images, setImages] = useState<ImageEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await api.get('/images');
        setImages(res.data.content);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  if (loading) return <ActivityIndicator size="large" />;

  return (
    <Container>
      <ScrollWrapper>
        <ScrollList
          data={images}
          renderItem={({item}: any) => {
            return <ImageCard image={item} />;
          }}
          keyExtractor={item => (item as any).id}
          numColumns={2}
          scrollEnabled
          contentContainerStyle={{flexGrow: 1}}
        />
      </ScrollWrapper>
    </Container>
  );
};

export default Home;
