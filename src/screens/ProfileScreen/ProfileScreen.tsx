import React from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
// import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { Text, View } from 'react-native';
import {
  stackParamList,
  // TopTabParamList,
} from '../../types/RootStackParamList';
import { StyleSheet } from 'react-native';
import { CustomIconButton } from '../../components/CustomIconButton';
import { useAppDispatch, useUser } from '../../app/hooks';
import { removeFromDevice } from '../../utils/fileSystem';
import { Dirs } from 'react-native-file-access';
import { actions as userActions } from '../../features/User/UserSlice';
import { User } from '../../types/User';

type Props = NativeStackScreenProps<stackParamList, 'Profile'>;

export const ProfileScreen: React.FC<Props> = () => {
  const dispatch = useAppDispatch();
  const { user } = useUser();

  const fileName = 'user.json';
  const filePath = `${Dirs.DocumentDir}/${fileName}`;

  const setUser = (newUser: User | null) => dispatch(userActions.set(newUser));

  const handleLogOut = () => {
    removeFromDevice(filePath);

    setUser(null);
  };

  return (
    <View style={styles.root}>
      <View style={styles.userCard}>
        <View>
          <Text style={styles.innerText}>Name:</Text>
          <Text style={styles.innerText}>{`Email: ${user?.email}`}</Text>
        </View>

        <View style={styles.button}>
          <CustomIconButton
            name={'logout'}
            size={25}
            onPress={handleLogOut}
            color={'#fff'}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    paddingHorizontal: '5%',
    paddingVertical: '10%',
    backgroundColor: '#161827',
  },
  userCard: {
    position: 'relative',

    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 10,

    backgroundColor: '#384436',
  },
  button: {
    position: 'absolute',
    top: 30,
    right: 20,
  },
  innerText: {
    fontSize: 16,
    color: '#fff',
  },
});
