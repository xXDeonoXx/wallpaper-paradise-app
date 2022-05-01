import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import getTheme from '../../theme';
// pages
import Home from '../pages/Home';
import ImageVisualization from '../pages/ImageVisualization';

type Category = {
  id: number;
  name: string;
};

export const categories: Category[] = [
  {
    id: 1,
    name: 'Anime',
  },
  {
    id: 2,
    name: 'Ghibli',
  },
  {
    id: 3,
    name: 'Landscapes',
  },
  {
    id: 4,
    name: 'Vaporwave',
  },
];

export type StackParamList = {
  Feed: {feedCategory: Category};
  ImageVisualization: {imageUrl: string};
};

const Stack = createStackNavigator<StackParamList>();
const Drawer = createDrawerNavigator();
const darkTheme = getTheme();

const AppRoutes = () => {
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
        <Drawer.Screen name="Recent" component={Feed} />
        {categories.map(category => {
          return (
            <Drawer.Screen
              name={category.name}
              component={Feed}
              key={category.id}
            />
          );
        })}
      </Drawer.Navigator>
    </>
  );
};

const Feed = ({route}: any) => {
  return (
    <Stack.Navigator initialRouteName="Feed">
      <Stack.Screen
        name="Feed"
        component={Home}
        options={{headerShown: false}}
        initialParams={{
          feedCategory: categories.find(cat => cat.name == route.name),
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
