import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dirs } from 'react-native-file-access';
import { CustomIconButton } from '../../components/CustomIconButton';
import { useAppDispatch, useUser } from '../../app/hooks';
import { getFromDevice, saveOnDevice } from '../../utils/fileSystem';
import { actions as userActions } from '../../features/User/UserSlice';
import { User } from '../../types/User';
import Icon from 'react-native-vector-icons/FontAwesome';

export const UserCard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useUser();

  const fileName = 'user.json';
  const filePath = `${Dirs.DocumentDir}/${fileName}`;

  const setUser = async (newUser: User | null) =>
    dispatch(userActions.set(newUser));

  const setUserFromDevice = async () => {
    const userFromDevice: User = await getFromDevice(filePath);

    await setUser(userFromDevice);
  };

  const handleLogOut = () => {
    saveOnDevice(filePath, null);
    setUserFromDevice();
  };

  return (
    <View style={styles.root}>
      <View style={styles.avatar}>
        <Icon name="user" size={50} color="#fff" />
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
          size={35}
          onPress={handleLogOut}
          color={'#fff'}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    position: 'relative',

    flexDirection: 'row',
    alignItems: 'center',

    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 10,

    backgroundColor: '#384436',
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',

    marginRight: 20,
    height: 80,
    width: 80,

    borderRadius: 40,
    backgroundColor: '#dddddd',
  },
  button: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  textFields: {
    gap: 6,
  },
  fieldName: {
    marginBottom: 2,
    fontSize: 16,
    color: '#fff',
  },
  fieldValue: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '300',
  },
});
