import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../auth/login';
import Register from '../auth/register';
import API from '../components/api';
import Remember from '../auth/remember';
import TheDrawer from './drawer';

const Navigation = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Navigation.Navigator headerMode={false}>
        <Navigation.Screen name="Login" component={Login} />
        <Navigation.Screen name="Register" component={Register} />
        <Navigation.Screen name="Remember" component={Remember} />
        <Navigation.Screen name="Home" component={TheDrawer} />
        <Navigation.Screen name="API" component={API} />
      </Navigation.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
