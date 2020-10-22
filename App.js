import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Splash from './source/auth/splash';
import Register from './source/auth/register';
import Login from './source/auth/login';
import Todo3 from './source/components/todo3';
export class App extends Component {
  render() {
    return <Todo3 />;
  }
}

export default App;
