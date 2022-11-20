import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {IllustrationRegister} from '../../assets';
import {Button, Input} from '../../components';
import {setForm} from '../../redux';
import {colors} from '../../utils';

const Register = ({navigation}) => {
  const {form} = useSelector(state => state.ReducerRegister);
  const dispatch = useDispatch();

  const sendData = () => {
    console.log('Data yg dikirim: ', form);
  };

  const onInputChange = (value, inputType) => {
    dispatch(setForm(inputType, value));
  };

  return (
    <View style={styles.wrapper.page}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Button type="icon" name="back" onPress={() => navigation.goBack()} />
        <IllustrationRegister
          width={106}
          height={115}
          style={styles.illustration}
        />
        <Text style={styles.text.desc}>
          Please submit your data for the registration process
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
