import {StackScreenProps} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import ImageCard from '../../components/ImageCard';
import LoadingScreen from '../../components/LoadingScreen';
import {StackParamList} from '../../routes/app.routes';
import api from '../../services/api';
import Category from '../../shared/interfaces/category.interface';
import ImageEntry from '../../shared/interfaces/image.interface';
import {transformRequestOptions} from '../../utils/axios-helpers';
import {Container, ScrollList, ScrollWrapper} from './styles';

type Props = StackScreenProps<StackParamList, 'Feed'>;

const Feed = ({route}: Props) => {
  // const tailwind = useTailwind();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [images, setImages] = useState<ImageEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [category] = useState<Category>(route.params.feedCategory);

  const loadMoreImages = async () => {
    if (currentPage >= totalPages) return;
    try {
      const page = currentPage + 1;
      let query: any = {
        params: {page},
      };
      if (category) {
        query = {
          params: {categories: [category.id.toString()], page},
          paramsSerializer: (params: {[x: string]: any[]}) =>
            transformRequestOptions(params),
        };
      }
      const res = await api.get('/images', query);
      setImages([...images, ...res.data.content]);
      setCurrentPage(currentPage + 1);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async () => {
      try {
        let query = {};
        if (category) {
          query = {
            params: {
              categories: [category.id.toString()],
            },
            paramsSerializer: (params: {[x: string]: any[]}) =>
              transformRequestOptions(params),
          };
        }
        const res = await api.get('/images', query);
        setImages(res.data.content);
        setTotalPages(res.data.totalPages);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [category]);

  if (loading) return <LoadingScreen />;

  return (
    <Container>
      <ScrollWrapper>
        <ScrollList
          data={images}
          // extraData={extraImages}
          renderItem={({item}: any) => {
            return <ImageCard image={item} />;
          }}
          keyExtractor={item => (item as any).id}
          numColumns={2}
          scrollEnabled
          contentContainerStyle={{flexGrow: 1}}
          onEndReached={loadMoreImages}
          onEndReachedThreshold={0.1}
        />
      </ScrollWrapper>
    </Container>
  );
};

export default Feed;
