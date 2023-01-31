import React, { ReactNode } from 'react';
import { Text } from 'react-native';
import { KeyboardTypeOptions, StyleSheet, TextInput, View } from 'react-native';

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

const styles = StyleSheet.create({
  root: {
    position: 'relative',
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',

    marginBottom: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: '100%',

    backgroundColor: '#F8F8FA',
    borderRadius: 10,
  },
  innerText: {
    fontSize: 16,
  },
  message: {
    position: 'absolute',
    bottom: -15,

    fontSize: 12,
    color: 'red',
  },
});
