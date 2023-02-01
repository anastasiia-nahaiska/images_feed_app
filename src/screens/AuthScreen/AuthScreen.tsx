import React, { useCallback, useEffect, useState } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Dirs } from 'react-native-file-access';
import { View } from 'react-native';

import { RootStackParamList } from '../../types/NavigationParamLists';
import { LoginButton } from '../../components/LoginButton';
import { CustomInput } from '../../components/FormInput';
import { getFromDevice, saveOnDevice } from '../../utils/fileSystem';
import { useAppDispatch } from '../../app/hooks';
import { actions as userActions } from '../../features/User/UserSlice';
import { User } from '../../types/User';
import { CustomIconButton } from '../../components/CustomIconButton';
import { styles } from './styles';
import { userFileName } from '../../constants/fileNames';
import { emailRegex, passwordRegex } from '../../constants/regexes';
import { colors } from '../../constants/styles/colors';

type Props = NativeStackScreenProps<RootStackParamList, 'Auth'>;

export const AuthScreen: React.FC<Props> = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(true);
  const [invalidEmailMessage, setInvalidEmailMessage] = useState('');
  const [invalidPasswordMessage, setInvalidPasswordMessage] = useState('');

  const dispatch = useAppDispatch();

  const filePath = `${Dirs.DocumentDir}/${userFileName}`;

  const setUser = useCallback(
    (newUser: User) => dispatch(userActions.set(newUser)),
    [],
  );

  const getUserFromDevice = useCallback(async () => {
    const userFromDevice: User = await getFromDevice(filePath);

    setUser(userFromDevice);
  }, [filePath]);

  const validateEmail = useCallback(() => {
    let message = '';

    if (!emailRegex.test(email)) {
      message = 'Incorrect email';
    }

    if (!email.length) {
      message = 'Email can not be empty';
    }

    setInvalidEmailMessage(message);

    return !message.length;
  }, [email]);

  const validatePassword = useCallback(() => {
    let message = '';

    if (!passwordRegex.test(password)) {
      message = 'Password can contain only digits and english letters';
    }

    if (password.length < 8 || password.length > 32) {
      message = 'Password length must be from 8 to 32';
    }

    if (!password.length) {
      message = 'Password can not be empty';
    }

    setInvalidPasswordMessage(message);

    return !message.length;
  }, [password]);

  const onSubmit = useCallback(async () => {
    const isValidPassword = validatePassword();
    const isValidEmail = validateEmail();

    if (isValidPassword && isValidEmail) {
      const username = email.split('@')[0];
      const newUser = {
        email,
        password,
        username,
      };

      saveOnDevice(filePath, newUser);

      setUser(newUser);
    }
  }, [password, email, filePath]);

  useEffect(() => {
    getUserFromDevice();
  }, [email, password, filePath]);

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
          <CustomIconButton
            name={isPasswordVisible ? 'visibility' : 'visibility-off'}
            size={25}
            color={colors.primary}
            onPress={() => setIsPasswordVisible(state => !state)}
          />
        </CustomInput>
      </View>

      <LoginButton onSubmit={onSubmit} />
    </View>
  );
};
