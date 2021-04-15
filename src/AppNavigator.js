import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import FirstScreen from './FirstScreen'
import RestaurantsList from './RestaurantsList'

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Pictures" component={FirstScreen}/>
        <Tab.Screen name="Restaurants" component={RestaurantsList} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
