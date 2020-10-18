import React, {Component} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import styles from './styles/dashboard';
import {
  Image,
  ImageBackground,
  ScrollView,
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
      data: ['Rising'],
      desc: '',
      image: '',
      isDone: '0',
    };
  }

  addData() {
    const todo = {
      task: this.state.data,
      desc: this.state.stack,
      is_done: 0,
    };
    fetch('http://restful-api-laravel-7.herokuapp.com/api/todo', {
      method: 'POST',
      body: todo,
      headers: {
        Authorization: `Bearer  eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9yZXN0ZnVsLWFwaS1sYXJhdmVsLTcuaGVyb2t1YXBwLmNvbVwvYXBpXC9yZWdpc3RlciIsImlhdCI6MTYwMjkxMjQyMCwiZXhwIjoxNjAyOTE2MDIwLCJuYmYiOjE2MDI5MTI0MjAsImp0aSI6IjVINWV0MUxwbkx2dTFXeXAiLCJzdWIiOjQ1LCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.bacNT-rdIy8hjdj-KcL_qwuZNnYRwODfTK5PMAtFWiQ`,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log('upload succes', response);
        alert('Upload success!');
      })
      .catch((error) => {
        console.log('upload error', error);
        alert('Upload failed!');
      });
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
    this.setState(
      {
        data: data.filter((value, id) => id != index),
      },
      function () {
        this.saveData();
      },
    );
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
            <ScrollView>
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
            </ScrollView>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

export default dashboard;
