import React from 'react';
import Login from '../auth/login';
import Register from '../auth/register';
import Dashboard from './dashboard';
import Array from './array';
import AscStrg from './ascStrg';
import API from './api';
import Profil from './profil';
import Remember from '../auth/remember';
import Hai from '../hai';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';

const Bottom = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Bottom.Navigator>
      <Bottom.Screen name="Dashboard" component={Dashboard} />
      <Bottom.Screen name="Array" component={Array} />
      <Bottom.Screen name="Asc_Strg" component={AscStrg} />
      <Bottom.Screen name="API" component={API} />
      <Bottom.Screen name="Profile" component={Profil} />
    </Bottom.Navigator>
  );
};

const Drawer = createDrawerNavigator();

const TheDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={BottomTab} />
    </Drawer.Navigator>
  );
};

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
        <Navigation.Screen name="hai" component={Hai} />
      </Navigation.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
