/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import Routes from './src/routes';
import {TailwindProvider} from 'tailwind-rn';
import utilities from './tailwind.json';

const App = () => {
  return (
    <TailwindProvider utilities={utilities}>
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
    </TailwindProvider>
  );
};

export default App;
