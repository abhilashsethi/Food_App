import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {StyleSheet, View} from 'react-native';
import COLORS from '../../consts/colors';
import 'react-native-gesture-handler';
import React from 'react';

import HomeScreen from '../screens/HomeScreen';
import CartScreen from '../screens/CartScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: COLORS.primary,
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon color={color} name="home-filled" size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="LocalMail"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon color={color} name="local-mall" size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <View style={styles.tab}>
              <Icon color={COLORS.primary} name="search" size={28} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favourite"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon color={color} name="favorite" size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon color={color} name="shopping-cart" size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  tab: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    borderColor: COLORS.primary,
    borderWidth: 2,
    borderRadius: 30,
    top: -25,
    elevation: 5,
  },
});
export default BottomNavigator;
