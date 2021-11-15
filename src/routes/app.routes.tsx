import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

// pages
import Home from '../pages/Home';

const AppRoutes = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
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
