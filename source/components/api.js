import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles/dashboard';
import {
  Image,
  ImageBackground,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import gradient from '../assets/gradient.jpg';
import trash from '../assets/trash.png';

export class dashboard extends Component {
  constructor() {
    super();
    this.state = {
      textInput: '',
      data: ['Something'],
      desc: '',
      image: '',
      isDone: '',
    };
  }

  addData() {
    const {textInput, data} = this.state;
    this.setState({data: [textInput, ...data]}, function () {
      this.saveData();
    });
  }

  saveData() {
    AsyncStorage.setItem('item', JSON.stringify(this.state.data)).catch((err) =>
      console.log(err),
    );
  }

  deleteData(index) {
    const {data} = this.state;
    this.setState({
      data: data.filter((value, id) => id != index),
    });
  }

  componentDidMount() {
    AsyncStorage.getItem('item')
      .then((response) => {
        if (response != null) {
          var savedData = JSON.parse(response);
          this.setState({data: savedData});
        } else {
          console.log('Tidak ada data yang tersimpan.');
        }
      })
      .catch((err) => alert('Async Storage tidak berfungsi.'));
  }

  render() {
    return (
      <View>
        <ImageBackground source={gradient} style={styles.bg}>
          <View style={{margin: 20}}>
            <Text style={styles.textTitle}>
              {' '}
              Got something to do, Radiant?{' '}
            </Text>
          </View>
          <View style={styles.mainView}>
            <View style={{flexDirection: 'row'}}>
              <TextInput
                style={styles.textInput}
                placeholder="the data is stored in API.."
                placeholderTextColor="white"
                selectionColor="pink"
                onChangeText={(input) => this.setState({textInput: input})}
              />
              <TouchableOpacity onPress={() => this.addData()}>
                <View style={styles.viewPlus}>
                  <Text style={styles.textPlus}>+</Text>
                </View>
              </TouchableOpacity>
            </View>
            {this.state.data.map((value, index) => (
              <View style={styles.viewList} key={index}>
                <View
                  style={{
                    flexDirection: 'row',
                    margin: 20,
                  }}>
                  <Text style={{color: '#fff', flex: 1}}>{value}</Text>
                  <TouchableOpacity onPress={() => this.deleteData(index)}>
                    <Image
                      source={trash}
                      style={{width: 25, height: 25, tintColor: '#fff'}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default dashboard;
