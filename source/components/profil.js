import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import aku from '../assets/aku.jpg';
import bg from '../assets/gradient.jpg';

export class profil extends Component {
  Logout() {
    AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View>
        <ImageBackground source={bg} style={{width: '100%', height: '100%'}}>
          <View style={{margin: 20}}>
            <View>
              <Image
                source={aku}
                style={{
                  width: 100,
                  height: 100,
                  borderRadius: 50,
                  borderWidth: 5,
                  borderColor: 'white',
                  alignSelf: 'center',
                }}
              />
            </View>
            <Text
              style={{textAlign: 'center', marginVertical: 20, color: 'white'}}>
              D:
            </Text>
            <TouchableOpacity onPress={() => this.Logout()}>
              <View
                style={{
                  backgroundColor: 'aqua',
                  height: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 10,
                  elevation: 5,
                }}>
                <Text style={{fontWeight: 'bold', fontSize: 20}}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default profil;
