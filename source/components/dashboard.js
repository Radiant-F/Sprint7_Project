import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export class dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  Logout() {
    AsyncStorage.clear();
    this.props.navigation.navigate('Login');
  }

  render() {
    return (
      <View style={{margin: 20}}>
        <TouchableOpacity onPress={() => this.Logout()}>
          <View
            style={{
              backgroundColor: 'aqua',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default dashboard;
