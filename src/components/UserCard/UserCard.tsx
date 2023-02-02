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
import * as imagesActions from '../../features/Images/ImagesSlice';

export const UserCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useUser();

  const filePath = `${Dirs.DocumentDir}/${userFileName}`;

  const setUser = useCallback((newUser: User | null) => {
    dispatch(userActions.set(newUser));
  }, []);

  const resetPage = useCallback(() => dispatch(imagesActions.resetPage()), []);

  const resetImage = useCallback(() => {
    dispatch(imagesActions.resetImage());
  }, []);

  const setUserFromDevice = useCallback(async () => {
    const userFromDevice: User = await getFromDevice(filePath);

    setUser(userFromDevice);
  }, [filePath]);

  const handleLogOut = useCallback(() => {
    resetImage();
    resetPage();
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
