import React, {Component} from 'react';
import styles from './styles/Register';
import {
  View,
  Image,
  Text,
  ImageBackground,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import bg from '../assets/bg.jpg';
import avatar from '../assets/plainAvatar.png';
import lock from '../assets/lock.png';
import email from '../assets/email.png';

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      ulangiPassword: '',
      cekPassword: true,
      ulangiCekPassword: true,
    };
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
          alert('register sukses');
          this.props.navigation.goBack();
        } else {
          alert('Pastikan Form Sudah Terisi dengan benar');
        }
      })
      //If response is not in json then in error
      .catch((error) => {
        alert('Pastikan Form Sudah Terisi dengan benar');
      });
  }
  render() {
    return (
      <View>
        <ImageBackground
          source={bg}
          style={styles.backgroundImage}
          blurRadius={2}>
          <View style={styles.mainView}>
            <Text style={styles.mainText}>Sign Up</Text>
            <View style={styles.textInputView}>
              <Image source={avatar} style={styles.textInputImage} />
              <TextInput
                placeholder="Your Name"
                style={styles.textInput}
                onChangeText={(name) => this.setState({name})}
              />
            </View>
            <View style={styles.textInputView}>
              <Image source={email} style={styles.textInputEmail} />
              <TextInput
                placeholder={'Email'}
                style={styles.textInput}
                onChangeText={(email) => this.setState({email})}
              />
            </View>
            <View style={styles.textInputView}>
              <Image source={lock} style={styles.textInputImage2} />
              <TextInput
                placeholder={'Password'}
                secureTextEntry={true}
                style={styles.textInput}
                onChangeText={(password) => this.setState({password})}
              />
            </View>
            <View style={styles.textInputView}>
              <Image source={lock} style={styles.textInputImage2} />
              <TextInput
                placeholder={'Confirm Password'}
                secureTextEntry={true}
                style={styles.textInput}
                onChangeText={(ulangiPassword) =>
                  this.setState({ulangiPassword})
                }
              />
            </View>
            <TouchableOpacity onPress={() => this.Register()}>
              <View style={styles.textViewLogin}>
                <Text style={styles.textLogin}>Register</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.textSubView}>
                Already registered? Sign in now!
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
