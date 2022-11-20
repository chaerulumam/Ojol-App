import React, {useEffect, useState} from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Button, Input} from '../../components';
import {colors} from '../../utils';
import {IconBack, IllustrationRegister} from '../../assets';
import {useSelector} from 'react-redux';

const Register = () => {
  const ReducerRegister = useSelector(state => state.ReducerRegister);

  useEffect(() => {
    console.log('Register: ', ReducerRegister);
  }, [ReducerRegister]);

  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
  });

  const sendData = () => {
    console.log('Data yg dikirim: ', form);
  };

  const onInputChange = (value, input) => {
    setForm({
      ...form,
      [input]: value,
    });
  };

  return (
    <View style={styles.wrapper.page}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <IconBack width={25} height={25} color={colors.default} />
        <IllustrationRegister
          width={106}
          height={115}
          style={styles.illustration}
        />
        <Text style={styles.text.desc}>
          Please submit your data for the registration process{' '}
          {ReducerRegister.title}
        </Text>
        <View style={styles.space(64)} />
        <Input
          placeholder="Full Name"
          value={form.fullname}
          onChangeText={value => onInputChange(value, 'fullName')}
        />
        <View style={styles.space(33)} />
        <Input
          placeholder="Email"
          value={form.email}
          onChangeText={value => onInputChange(value, 'email')}
        />
        <View style={styles.space(33)} />
        <Input
          placeholder="Password"
          value={form.password}
          onChangeText={value => onInputChange(value, 'password')}
          secureTextEntry={true}
        />
        <View style={styles.space(83)} />
        <Button title="Sign Up" onPress={sendData} />
      </ScrollView>
    </View>
  );
};

const styles = {
  wrapper: {
    page: {padding: 20},
  },
  illustration: {
    marginTop: 8,
  },
  text: {
    desc: {
      fontSize: 14,
      fontWeight: 'bold',
      color: colors.default,
      marginTop: 16,
      maxWidth: 200,
    },
  },

  space: value => {
    return {
      height: value,
    };
  },
};

export default Register;
