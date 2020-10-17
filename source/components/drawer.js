import React, {Component} from 'react';
import styles from './styles/drawer';
import {Image, Text, TextInput, View} from 'react-native';
import sampulFB from '../assets/sampulFB.jpg';
import asku from '../assets/aku.jpg';

export class drawer extends Component {
  render() {
    return (
      <View>
        <Image source={sampulFB} style={styles.sampul} />
        <Image source={asku} style={styles.pp} />
        <Text style={styles.mainText}> Muhammad Radiant Fadilah </Text>
        <View style={styles.viewBio}>
          <View style={styles.subViewBio}>
            <TextInput placeholder="bio" style={{width: '100%'}} />
          </View>
        </View>
      </View>
    );
  }
}

export default drawer;
