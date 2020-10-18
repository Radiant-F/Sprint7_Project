import React from 'react';
import {View, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// component
import Dashboard from '../components/dashboard';
import Array from '../components/array';
import AscStrg from '../components/ascStrg';
import API from '../components/api';
import Profil from '../components/profil';
// assets
import House from '../assets/home.png';
import Pencil from '../assets/pencilOutline.png';
import Avatar from '../assets/plainAvatar.png';

const IconBottom = (props) => {
  const {color, focused} = props.data;
  let colorSelected = focused ? color : '#fff';
  return (
    <View>
      <Image
        source={props.image}
        style={{width: 25, height: 25, tintColor: colorSelected}}
      />
    </View>
  );
};

const Bottom = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Bottom.Navigator
      tabBarOptions={{
        showLabel: false,
        activeBackgroundColor: '#eb00db',
        inactiveBackgroundColor: '#363636',
      }}>
      <Bottom.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: (props) => <IconBottom data={props} image={House} />,
        }}
      />
      <Bottom.Screen
        name="Array"
        component={Array}
        options={{
          tabBarIcon: (props) => <IconBottom data={props} image={Pencil} />,
        }}
      />
      <Bottom.Screen
        name="Asc_Strg"
        component={AscStrg}
        options={{
          tabBarIcon: (props) => <IconBottom data={props} image={Pencil} />,
        }}
      />
      <Bottom.Screen
        name="API"
        component={API}
        options={{
          tabBarIcon: (props) => <IconBottom data={props} image={Pencil} />,
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={Profil}
        options={{
          tabBarIcon: (props) => <IconBottom data={props} image={Avatar} />,
        }}
      />
    </Bottom.Navigator>
  );
};

export default BottomTab;
