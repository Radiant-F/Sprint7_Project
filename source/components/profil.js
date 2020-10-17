import React, {Component} from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import aku from '../assets/aku.jpg';

export class profil extends Component {
  Logout() {
    AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={{backgroundColor: '#00000052', flex: 1}}>
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
          <Text style={{textAlign: 'center', marginVertical: 20}}>
            for real, my brain is really slow for this kind of coding. im
            sorry.. im sorry, im sorry.
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
      </View>
    );
  }
}

export default profil;
