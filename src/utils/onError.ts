import Snackbar from 'react-native-snackbar';

export const onError = (message: string) => {
  Snackbar.show({
    text: message,
    duration: Snackbar.LENGTH_LONG,
  });
};
