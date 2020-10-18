import React, {Component} from 'react';
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
    };
  }

  addData() {
    const {textInput, data} = this.state;
    this.setState({data: [textInput, ...data]});
  }

  deleteData(index) {
    const {data} = this.state;
    this.setState({
      data: data.filter((value, id) => id != index),
    });
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
                placeholder="the data is stored in RAM..."
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
