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
import React from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator, StackScreenProps } from '@react-navigation/stack';

import DetailScreen from "./screens/DetailScreen"
import MainScreen from './screens/MainScreen';
import { BorderlessButton } from 'react-native-gesture-handler';




type RootStackParamList = {
  Home: undefined;
  Detail: { query: string };
};

type Props = StackScreenProps<RootStackParamList, 'Detail'>;

const RootStack = createStackNavigator<RootStackParamList>();

const App = ({ navigation }: Props) => {

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
