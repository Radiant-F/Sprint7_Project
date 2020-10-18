import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  bg: {
    width: '100%',
    height: '100%',
    position: 'relative',
  },
  textTitle: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
  },
  mainView: {
    backgroundColor: '#0000004a',
    padding: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    flex: 1,
  },
  textInput: {
    color: '#fff',
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    width: '80%',
    marginRight: 15,
  },
  viewPlus: {
    width: 56,
    height: 56,
    backgroundColor: '#000',
    borderRadius: 27,
  },
  textPlus: {
    fontWeight: 'bold',
    fontSize: 40,
    color: '#fff',
    textAlign: 'center',
    top: -3,
  },
  viewList: {
    backgroundColor: '#00000057',
    borderRadius: 10,
    justifyContent: 'center',
    marginVertical: 10,
  },
});
