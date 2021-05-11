/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
import 'react-native-gesture-handler';
import 'react-native-vector-icons';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import DetailScreen from "./screens/DetailScreen"
import MainScreen from './screens/MainScreen';

import { Provider as StoreProvider } from "react-redux"
import store from "./redux/store/store"
import { RootStackTypes } from './types/RootStackTypes';


const RootStack = createStackNavigator<RootStackTypes>();

const App = () => {

  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen name="Home" component={MainScreen} options={{ headerShown: false }} />
          <RootStack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }} />
        </RootStack.Navigator>
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
