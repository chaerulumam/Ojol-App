import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const ActionButton = ({desc, title}) => {
  return (
    <View style={{marginBottom: 43, maxWidth: 225}}>
      <Text
        style={{
          fontSize: 10,
          color: '#7e7e7e',
          textAlign: 'center',
          paddingHorizontal: '15%',
          marginBottom: 6,
        }}>
        {desc}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: '#a55eea',
          borderRadius: 25,
          paddingVertical: 13,
        }}>
        <Text
          style={{
            fontSize: 12,
            fontWeight: 'bold',
            color: 'white',
            textTransform: 'uppercase',
            textAlign: 'center',
          }}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const WelcomeAuth = () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <View
        style={{
          width: 219,
          height: 117,
          backgroundColor: '#a55eea',
          marginBottom: 10,
        }}
      />
      <Text
        style={{
          fontSize: 18,
          fontWeight: 'bold',
          color: '#a55eea',
          marginBottom: 76,
        }}>
        Welcome to O-JOL
      </Text>
      <ActionButton
        desc="Please Sign In if you already have an account"
        title="Masuk"
      />
      <ActionButton
        desc="or you can Sign Up here if do not have an account yet"
        title="Daftar"
      />
    </View>
  );
};

export default WelcomeAuth;
