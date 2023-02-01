import React, { ReactNode } from 'react';
import { Text } from 'react-native';
import { KeyboardTypeOptions, TextInput, View } from 'react-native';
import { styles } from './styles';

type Props = {
  children?: ReactNode;
  value: string;
  onChangeText: (next: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: KeyboardTypeOptions;
  invalidValueMessage?: string;
  onBlur?: () => void;
};

export const CustomInput: React.FC<Props> = ({
  children = null,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = 'default',
  invalidValueMessage = '',
  onBlur,
}) => (
  <View style={styles.root}>
    <View style={styles.inputContainer}>
      <TextInput
        value={value}
        onChangeText={newText => onChangeText(newText)}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onBlur={onBlur}
        style={styles.innerText}
      />
      {children}
    </View>
    {invalidValueMessage.length > 0 && (
      <Text style={styles.message}>{invalidValueMessage}</Text>
    )}
  </View>
);
