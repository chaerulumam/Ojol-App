import React from 'react';
import {Text, View} from 'react-native';
import {Input} from '../../components';
import {colors} from '../../utils';
import {IconBack, IllustrationRegister} from '../../assets';

const Register = () => {
  return (
    <View style={styles.wrapper.page}>
      <IconBack width={25} height={25} />
      <IllustrationRegister
        width={106}
        height={115}
        style={styles.illustration}
      />
      <Text style={styles.text.desc}>
        Please submit your data for the registration process
      </Text>
      <View style={styles.space(64)} />
      <Input placeholder="Full Name" />
      <View style={styles.space(33)} />
      <Input placeholder="Email" />
      <View style={styles.space(33)} />
      <Input placeholder="Password" />
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
