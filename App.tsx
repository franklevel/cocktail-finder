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




type RootStackParamList = {
  Home: undefined;
  Detail: { query: string };
};

//type Props = StackScreenProps<RootStackParamList, 'Detail'>;

const RootStack = createStackNavigator<RootStackParamList>();

const App = () => {

  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={MainScreen} options={{ headerShown: false }} />
        <RootStack.Screen name="Detail" component={DetailScreen} options={{ headerShown: false }} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;
