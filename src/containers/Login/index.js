// @flow
import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Text,
  Alert,
} from 'react-native';

// import {gql, useMutation} from '@apollo/client';

import styles from './styles';
import {useMutation} from '@apollo/react-hooks';
import gql from 'graphql-tag';

import {getResource} from '../../webservices/simpleApiCalls';
import {verifyToken} from '../../webservices/index';

import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';

const {width} = Dimensions.get('window');

const Login = props => {
  const [email, setEmail] = useState('t@t.com');
  const [password, setPassword] = useState('test729018');
  const [loading, setLoader] = useState(false);

  useEffect(() => {}, []);

  const signIn = async () => {
    try {
      setLoader(true);
      console.log('it works');

      GoogleSignin.configure({
        webClientId:
          '617816405594-6pjrp9ltas0pjd8kuajpcb1l7abekh4a.apps.googleusercontent.com',
        offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        scopes: ['profile', 'email'],
      });

      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();

      let info = await getResource(verifyToken(userInfo.idToken));
      setLoader(false);
      if (info?.data?.success) {
        Alert.alert('Success', 'User Verified');
      } else {
        Alert.alert('Error', 'UnVerified');
      }
    } catch (error) {
      console.log('🚀 ~ file: index.js ~ line 59 ~ signIn ~ error', error);
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  // props.navigation.navigate('Profile');

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.textHeading}>Google Login</Text>
        {!loading ? (
          <TouchableOpacity style={styles.btnContainer} onPress={signIn}>
            <Text style={styles.btnText}>Login</Text>
          </TouchableOpacity>
        ) : (
          <Text>Loading</Text>
        )}
      </View>
    </View>
  );
};

export default Login;
