import React from 'react';
import { Pressable } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

type Props = {
  onPress: () => void;
  name: string;
  size: number;
  color: string;
};

export const CustomIconButton: React.FC<Props> = ({
  onPress,
  name,
  size,
  color,
}) => (
  <Pressable onPress={onPress}>
    <MaterialIcon name={name} size={size} color={color} />
  </Pressable>
);
