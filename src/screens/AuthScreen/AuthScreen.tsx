import React, { useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types/RootStackParamList';
import { View, StyleSheet, Pressable } from 'react-native';
import { LoginButton } from '../../components/LoginButton';
import { CustomInput } from '../../components/FormInput';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {
  emailRegex,
  containSpacesRegex,
  passwordLengthRegex,
} from '../../constants/Regexes';

type Props = NativeStackScreenProps<RootStackParamList, 'Auth'>;

export const AuthScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [invalidEmailMessage, setInvalidEmailMessage] = useState('');
  const [invalidPasswordMessage, setInvalidPasswordMessage] = useState('');

  const validateEmail = () => {
    let message = '';

    if (!emailRegex.test(email)) {
      message = 'Email is not valid';
    }

    if (!email.length) {
      message = 'Email can not be empty';
    }

    setInvalidEmailMessage(message);

    return message.length > 0;
  };

  const validatePassword = () => {
    let message = '';

    if (!passwordLengthRegex.test(password)) {
      message = 'Password length must be from 8 to 32';
    }

    if (containSpacesRegex.test(password)) {
      message = 'Password can not contain spaces';
    }

    if (!password.length) {
      message = 'Email can not be empty';
    }

    setInvalidPasswordMessage(message);

    return message.length > 0;
  };

  const onSubmit = () => {
    const isInvalidEmail = validateEmail();
    const isInvalidPasword = validatePassword();

    if (!isInvalidEmail && !isInvalidPasword) {
      navigation.navigate('Root');
    }
  };

  const handlePasswordVisibility = () => {
    setIsPasswordVisible(state => !state);
  };

  return (
    <View style={styles.root}>
      <View style={styles.loginForm}>
        <CustomInput
          value={email}
          onChangeText={setEmail}
          placeholder="Email"
          keyboardType="email-address"
          invalidValueMessage={invalidEmailMessage}
          onBlur={validateEmail}
        />

        <CustomInput
          value={password}
          onChangeText={setPassword}
          placeholder="Password"
          secureTextEntry={isPasswordVisible}
          invalidValueMessage={invalidPasswordMessage}
          onBlur={validatePassword}
        >
          <Pressable onPress={handlePasswordVisibility}>
            <MaterialIcon
              name={isPasswordVisible ? 'visibility-off' : 'visibility'}
              size={25}
              color="#161827"
            />
          </Pressable>
        </CustomInput>
      </View>

      <LoginButton onSubmit={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: '5%',

    backgroundColor: '#161827',
  },
  loginForm: {
    justifyContent: 'center',
    gap: 30,
    marginBottom: 70,
  },
});
