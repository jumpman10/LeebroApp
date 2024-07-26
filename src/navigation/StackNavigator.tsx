import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home';
import Lecture from '../screens/Lecture';
import TimeOptions from '../screens/TimeOptions';

export type RootStackParams = {
  Home: undefined;
  TimeOptions: undefined;
  Lecture: undefined;
};
const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{cardStyle: {backgroundColor: '#D9FAFF'}}}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Lecture"
        component={Lecture}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TimeOptions"
        component={TimeOptions}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
