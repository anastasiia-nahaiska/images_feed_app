import React from 'react';
import { Text, View } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { colors } from '../../constants/styles/colors';
import { fontSizes } from '../../constants/styles/fontSizes';
import { styles } from './styles';

type Props = {
  fontSize?: number;
  iconSize?: number;
};

export const NetworkInfo: React.FC<Props> = ({ fontSize, iconSize }) => (
  <View style={styles.root}>
    <MaterialIcon
      name="portable-wifi-off"
      size={iconSize || 30}
      color={colors.white}
    />
    <Text
      style={{
        ...styles.message,
        fontSize: fontSize || fontSizes.extraLarge,
      }}
    >
      No network connection
    </Text>
  </View>
);
