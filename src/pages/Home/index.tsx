import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text} from 'react-native';
import {useTailwind} from 'tailwind-rn/dist';
import ImageCard from '../../components/ImageCard';
import api from '../../services/api';
import ImageEntry from '../../shared/interfaces/image.interface';
import {Container, ScrollList, ScrollWrapper} from './styles';
import {StackParamList} from '../../routes/app.routes';
import {StackScreenProps} from '@react-navigation/stack';
import Category from '../../shared/interfaces/category.interface';
import {transformRequestOptions} from '../../utils/axios-helpers';

type Props = StackScreenProps<StackParamList, 'Feed'>;

const Home = ({route}: Props) => {
  // const tailwind = useTailwind();
  const [images, setImages] = useState<ImageEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState<Category>(route.params.feedCategory);

  useEffect(() => {
    (async () => {
      try {
        let query = {};
        if (category) {
          query = {
            params: {categories: [category?.id.toString()]},
            paramsSerializer: (params: {[x: string]: any[]}) =>
              transformRequestOptions(params),
          };
        }
        const res = await api.get('/images', query);
        setImages(res.data.content);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [category]);

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
