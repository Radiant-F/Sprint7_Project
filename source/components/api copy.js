import AsyncStorage from '@react-native-community/async-storage';
import React, {Component} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';

export class api extends Component {
  constructor(properti) {
    super(properti);
    this.state = {
      name: '',
      email: '',
      password: '',
      ulangiPassword: '',
      cekPassword: true,
      ulangiCekPassword: true,
    };
    AsyncStorage.getItem('token').then((value) => {
      console.log(value);
      if (value !== null) {
        this.props.navigation.navigate('hai');
      } else {
        this.props.navigation.navigate('API');
      }
    });
  }

  Register() {
    const {name, email, password, ulangiPassword} = this.state;

    //POST json
    var dataToSend = {
      name: name,
      email: email,
      password: password,
      password_confirmation: ulangiPassword,
    };
    //making data to send on server
    var formBody = [];
    for (var key in dataToSend) {
      var encodedKey = encodeURIComponent(key);
      var encodedValue = encodeURIComponent(dataToSend[key]);
      formBody.push(encodedKey + '=' + encodedValue);
    }
    formBody = formBody.join('&');
    //POST request
    fetch('http://restful-api-laravel-7.herokuapp.com/api/register', {
      method: 'POST', //Request Type
      body: formBody, //post body
      headers: {
        //Header Defination
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    })
      .then((response) => response.json())
      //If response is in json then in success
      .then((responseJson) => {
        console.log(responseJson);
        const {token} = responseJson;
        if (token) {
          alert('Registrasi Sukses');
          AsyncStorage.setItem('token', token);
          this.props.navigation.navigate('hai');
        } else {
          alert('Make sure there is no empty box.');
        }
      })
      //If response is not in json then in error
      .catch((error) => {
        alert('Pastikan Form Sudah Terisi dengan benar');
      });
  }

  render() {
    return (
      <View style={{margin: 20}}>
        <Text> Name </Text>
        <View
          style={{
            backgroundColor: '#d4d4d4',
            borderRadius: 10,
            paddingHorizontal: 10,
          }}>
          <TextInput
            placeholder="Your Name"
            onChangeText={(name) => this.setState({name})}
          />
        </View>
        <Text> Email </Text>
        <View
          style={{
            backgroundColor: '#d4d4d4',
            borderRadius: 10,
            paddingHorizontal: 10,
          }}>
          <TextInput
            placeholder="youremail@example.com"
            onChangeText={(surel) => this.setState({email: surel})}
          />
        </View>
        <Text> Password </Text>
        <View
          style={{
            backgroundColor: '#d4d4d4',
            borderRadius: 10,
            paddingHorizontal: 10,
          }}>
          <TextInput
            placeholder="Your_Pass"
            onChangeText={(sandi) => this.setState({password: sandi})}
            secureTextEntry={true}
          />
        </View>
        <View
          style={{
            backgroundColor: '#d4d4d4',
            borderRadius: 10,
            paddingHorizontal: 10,
            marginTop: 10,
          }}>
          <TextInput
            placeholder="Confirm_Pass"
            onChangeText={(resandi) => this.setState({ulangiPassword: resandi})}
            secureTextEntry={true}
          />
        </View>
        <TouchableOpacity onPress={() => this.Register()}>
          <View
            style={{
              backgroundColor: 'aqua',
              height: 50,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              marginTop: 20,
            }}>
            <Text style={{fontWeight: 'bold', fontSize: 20}}>
              Reveal secret ;)
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default api;
