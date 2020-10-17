import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  textInputView: {
    backgroundColor: 'aqua',
    borderRadius: 10,
    flex: 1,
    paddingHorizontal: 10,
    marginRight: 10,
    elevation: 5,
  },
  plusView: {
    backgroundColor: 'aqua',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    elevation: 5,
  },
  plusText: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
  },
  viewList: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    backgroundColor: 'aqua',
    borderRadius: 10,
    padding: 10,
    elevation: 5,
  },
  viewTask: {
    width: '80%',
    backgroundColor: '#ffffffb5',
    borderRadius: 10,
    borderColor: 'black',
    borderWidth: 1,
    padding: 10,
  },
});
