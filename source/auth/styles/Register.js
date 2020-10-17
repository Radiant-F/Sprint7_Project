import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  mainView: {
    backgroundColor: '#ffffffb3',
    margin: 20,
    borderRadius: 10,
  },
  mainText: {
    textAlign: 'center',
    fontSize: 35,
    marginTop: 20,
    marginBottom: 10,
  },
  subView: {
    margin: 10,
  },
  textInputView: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    height: 50,
    width: 300,
    marginVertical: 5,
  },
  textInputEmail: {
    width: 20,
    height: 15,
    marginLeft: 8,
    marginRight: 11,
  },
  textInputImage: {
    width: 25,
    height: 25,
    marginRight: 7,
    marginLeft: 6,
  },
  textInputImage2: {
    width: 25,
    height: 25,
    marginRight: 8,
    marginLeft: 6,
  },
  textInput: {
    width: '80%',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  textViewLogin: {
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: '#faaf00',
    borderRadius: 5,
    height: 50,
    width: 300,
    marginTop: 10,
  },
  textLogin: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#fff',
    textShadowColor: 'black',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 0.5,
      height: 0.5,
    },
  },
  textSwitchView: {
    justifyContent: 'space-between',
  },
  textSubView: {
    fontWeight: 'bold',
    color: 'grey',
    textAlign: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
});
