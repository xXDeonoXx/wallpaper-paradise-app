import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useEffect, useState} from 'react';
import getTheme from '../../theme';
import LoadingScreen from '../components/LoadingScreen';
// pages
import Feed from '../pages/Feed';
import ImageVisualization from '../pages/ImageVisualization';
import api from '../services/api';
import ImageEntry from '../shared/interfaces/image.interface';

type Category = {
  id: number;
  name: string;
};

export type StackParamList = {
  Feed: {feedCategory: Category};
  ImageVisualization: {image: ImageEntry};
};

const Stack = createStackNavigator<StackParamList>();
const Drawer = createDrawerNavigator();
const darkTheme = getTheme();

const AppRoutes = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  useEffect(() => {
    (async () => {
      const res = await api.get('/categories', {params: {size: 30}});
      setCategories(res.data.content);
    })();
  }, []);
  if (!categories.length) return <LoadingScreen />;
  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          unmountOnBlur: true,
          headerStyle: {
            backgroundColor: darkTheme.colors.backgroundAlternative,
          },
          headerTintColor: darkTheme.colors.text,
          drawerInactiveTintColor: darkTheme.colors.text,
          drawerContentStyle: {
            backgroundColor: darkTheme.colors.backgroundAlternative,
          },
        }}>
        <Drawer.Screen name="Recent" component={FeedStack} />
        {categories.map(category => {
          return (
            <Drawer.Screen
              name={category.name}
              component={FeedStack}
              key={category.id}
              initialParams={{category}}
            />
          );
        })}
      </Drawer.Navigator>
    </>
  );
};

const FeedStack = ({route}: any) => {
  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen
        name="Feed"
        component={Feed}
        options={{headerShown: false}}
        initialParams={{
          feedCategory: route.params?.category,
        }}
      />
      <Stack.Screen
        name="ImageVisualization"
        component={ImageVisualization}
        options={{headerShown: false}}
        // options={{
        //   header: () => {
        //     return <></>;
        //   },
        // }}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
