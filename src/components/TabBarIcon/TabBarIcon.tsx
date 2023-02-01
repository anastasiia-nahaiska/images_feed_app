import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

type Props = {
  routeName: string;
  iconName: string;
};

export const TabBarIcon: React.FC<Props> = ({ routeName, iconName }) => (
  <View style={styles.root}>
    <Text style={styles.text}>{routeName}</Text>
    <MaterialIcon size={30} name={iconName} color="#fff" />
  </View>
);

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#ddd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
  },
  text: {
    color: '#fff',
    fontSize: 18,
    overflow: 'visible',
    // backgroundColor: '#ddd',
  },
});
