import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import InputField from '../component/InputField';
import CustomBtn from '../component/CustomBtn';

const Register = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (password === confirmPassword) {
      navigation.navigate('Home', { username, email });
    } else {
      alert('Passwords do not match');
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#011D45' }}>
      <View style={styles.title}>
        <Text style={styles.registertitle}>Register with skenu</Text>
      </View>
      <View style={{ paddingHorizontal: 30, marginTop: 40 }}>
        <InputField
          placeholder={"UserName"}
          styleInput={styles.styleInput}
          textColor={'white'}
          onChangeText={setUsername}
        />

        <InputField
          placeholder={"Email"}
          styleInput={styles.styleInput}
          textColor={'white'}
          onChangeText={setEmail}
        />

        <InputField
          placeholder={"Password"}
          styleInput={styles.styleInput}
          textColor={'white'}
          onChangeText={setPassword}
        />

        <InputField
          placeholder={"Confirm password"}
          styleInput={styles.styleInput}
          textColor={'white'}
          onChangeText={setConfirmPassword}
        />

        <View style={{ flexDirection: 'row', marginTop: 20, alignItems: 'center' }}>
          <TouchableOpacity style={{ width: 15, height: 15, backgroundColor: '#C4C4C4', marginLeft: 12, marginRight: 10 }}>
          </TouchableOpacity>
          <Text style={{ fontSize: 15, fontWeight: "700", lineHeight: 20.43, textAlign: 'center', color: '#FFFFFF' }}>Agree terms and condition</Text>
        </View>

        <CustomBtn
          title={"Register"}
          stylebtn={styles.registerBtn}
          styleText={{ color: 'white', fontSize: 14, fontWeight: '700' }}
          onPress={handleRegister}
        />
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  title: {
    width: "100%",
    height: 51,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: '#F8CE58',
    alignItems: 'center',
    justifyContent: "center"
  },
  registertitle: {
    fontSize: 20,
    fontWeight: "700",
    lineHeight: 27.24,
    textAlign: "center",
    color: '#011D45'
  },
  styleInput: {
    width: 343,
    height: 55,
    marginTop: 30,
    borderRadius: 4,
    paddingHorizontal: 10,
    backgroundColor: '#001533',
    borderColor: '#F8CE58',
    color: 'white'
  },
  registerBtn: {
    width: 343,
    height: 56,
    borderRadius: 4,
    backgroundColor: '#001533',
    marginTop: 50
  }
});
