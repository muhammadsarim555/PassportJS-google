// @flow
import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textHeading: {
    fontSize: width * 0.06,
  },
  loginContainer: {
    backgroundColor: 'white',
    width: width * 0.85,
    height: height * 0.4,
    paddingHorizontal: width * 0.07,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textInputStyle: {
    width: width * 0.8,
    height: 50,
    backgroundColor: 'grey',
    borderRadius: 15,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  btnContainer: {
    width: width * 0.8,
    height: 50,
    backgroundColor: '#309EC7',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 50,
  },
  btnText: {
    fontSize: width * 0.05,
    color: 'white',
  },
});
