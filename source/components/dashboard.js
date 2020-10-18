import React, {Component} from 'react';
import {ImageBackground, Text, View} from 'react-native';
import bg from '../assets/gradient.jpg';

export class dashboard extends Component {
  render() {
    return (
      <View>
        <ImageBackground source={bg} style={{width: '100%', height: '100%'}}>
          <Text> nothing to see here... </Text>
        </ImageBackground>
      </View>
    );
  }
}

export default dashboard;
