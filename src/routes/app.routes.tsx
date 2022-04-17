import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

// pages
import Home from '../pages/Home';
import ImageVisualization from '../pages/ImageVisualization';

export type StackParamList = {
  Home: undefined;
  ImageVisualization: {imageUrl: string};
};
const AppRoutes = () => {
  const Stack = createStackNavigator<StackParamList>();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          header: () => {
            return <></>;
          },
        }}
      />
      <Stack.Screen
        name="ImageVisualization"
        component={ImageVisualization}
        options={{
          header: () => {
            return <></>;
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AppRoutes;
