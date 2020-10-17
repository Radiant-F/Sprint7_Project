import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Splash from './source/auth/splash';
import Register from './source/auth/register';
import Login from './source/auth/login';

export class App extends Component {
  render() {
    return <Splash />;
  }
}

export default App;
