import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigator from './src/views/navigation/BottomNavigator';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar} from 'react-native';
import 'react-native-gesture-handler';
import React from 'react';

import DetailsScreen from './src/views/screens/DetailsScreen';
import OnBoardScreen from './src/views/screens/OnBoardScreen';
import COLORS from './src/consts/colors';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content" />
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="BoardScreen" component={OnBoardScreen} />
        <Stack.Screen name="Home" component={BottomNavigator} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
