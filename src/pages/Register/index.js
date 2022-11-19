import React from 'react';
import {Text, View} from 'react-native';
import {Input} from '../../components';

const Register = () => {
  return (
    <View style={{padding: 20}}>
      <View style={{width: 25, height: 25, backgroundColor: 'blue'}} />
      <View
        style={{
          width: 106,
          height: 115,
          backgroundColor: 'purple',
          marginTop: 8,
        }}
      />
      <Text
        style={{
          fontSize: 14,
          fontWeight: 'bold',
          color: 'purple',
          marginTop: 16,
          maxWidth: 200,
        }}>
        Please submit your data for the registration process
      </Text>
      <Input placeholder="Full Name" />
      <Input placeholder="Email" />
      <Input placeholder="Password" />
    </View>
  );
};

export default Register;
