import React from 'react';
import {Image, Text, View} from 'react-native';
import {welcomeAuth} from '../../assets';
import {colors} from '../../utils';

import ActionButton from './ActionButton';

const WelcomeAuth = ({navigation}) => {
  const handleGoTo = screen => {
    navigation.navigate(screen);
  };

  return (
    <View style={styles.wrapper.page}>
      <Image source={welcomeAuth} style={styles.wrapper.illustration} />
      <Text style={styles.text.welcome}>Welcome to O-JOL</Text>
      <ActionButton
        desc="Please Sign In if you already have an account"
        title="Masuk"
        onPress={() => handleGoTo('Login')}
      />
      <ActionButton
        desc="or you can Sign Up here if do not have an account yet"
        title="Daftar"
        onPress={() => handleGoTo('Register')}
      />
    </View>
  );
};

const styles = {
  wrapper: {
    page: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'white',
    },

    illustration: {
      width: 219,
      height: 117,
      marginBottom: 10,
    },
  },
  text: {
    welcome: {
      fontSize: 18,
      fontWeight: 'bold',
      color: colors.default,
      marginBottom: 76,
    },
  },
};

export default WelcomeAuth;
