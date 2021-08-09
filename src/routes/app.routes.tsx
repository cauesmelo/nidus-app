import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Auth } from '../pages/Auth';
import { Dashboard } from '../pages/Dashboard';

const { Navigator, Screen } = createStackNavigator();

export const AppRoutes = () => {
  return (
    <NavigationContainer>
      <Navigator headerMode="none" initialRouteName="Auth">

        <Screen
          name="Auth"
          component={Auth}
        />

        <Screen
          name="Dashboard"
          component={Dashboard}
        />
      </Navigator>
    </NavigationContainer>
  );
}