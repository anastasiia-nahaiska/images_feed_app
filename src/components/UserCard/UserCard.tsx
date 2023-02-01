import React, { useCallback } from 'react';
import { Text, View } from 'react-native';
import { Dirs } from 'react-native-file-access';
import { CustomIconButton } from '../../components/CustomIconButton';
import { useAppDispatch, useUser } from '../../app/hooks';
import { getFromDevice, saveOnDevice } from '../../utils/fileSystem';
import { actions as userActions } from '../../features/User/UserSlice';
import { User } from '../../types/User';
import Icon from 'react-native-vector-icons/FontAwesome';
import { styles } from './styles';
import { userFileName } from '../../constants/fileNames';
import { colors } from '../../constants/styles/colors';

export const UserCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useUser();

  const filePath = `${Dirs.DocumentDir}/${userFileName}`;

  const setUser = useCallback(
    async (newUser: User | null) => dispatch(userActions.set(newUser)),
    [],
  );

  const setUserFromDevice = useCallback(async () => {
    const userFromDevice: User = await getFromDevice(filePath);

    await setUser(userFromDevice);
  }, [filePath]);

  const handleLogOut = useCallback(() => {
    saveOnDevice(filePath, null);
    setUserFromDevice();
  }, [filePath]);

  return (
    <View style={styles.root}>
      <View style={styles.avatar}>
        <Icon name="user" size={50} color={colors.white} />
      </View>

      <View style={styles.textFields}>
        <View>
          <Text style={styles.fieldName}>Username: </Text>
          <Text style={styles.fieldValue}>{user?.username}</Text>
        </View>
        <View>
          <Text style={styles.fieldName}>Email:</Text>
          <Text style={styles.fieldValue}>{user?.email}</Text>
        </View>
      </View>

      <View style={styles.button}>
        <CustomIconButton
          name={'logout'}
          size={25}
          onPress={handleLogOut}
          color={colors.white}
        />
      </View>
    </View>
  );
};
