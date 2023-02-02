import { FileSystem } from 'react-native-file-access';

export const saveOnDevice = async (path: string, data: any) => {
  FileSystem.writeFile(path, JSON.stringify(data));
};

export const getFromDevice = async (path: string): Promise<any> => {
  const isFileExist = await FileSystem.exists(path);

  if (!isFileExist) {
    return null;
  }

  const dataInJSON = await FileSystem.readFile(path);
  const data = JSON.parse(dataInJSON);

  return data;
};
