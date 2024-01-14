import {MMKV} from 'react-native-mmkv';

const storage = new MMKV();

const USER_STORAGE = 'user';

const setObjectToLocal = (storageName: string, value: object) =>
  storage.set(storageName, JSON.stringify(value));

const getObjectFromLocal = (storageName: string) => {
  const obj = storage.getString(storageName);
  return obj ? JSON.parse(obj) : {};
};

export {storage, USER_STORAGE, setObjectToLocal, getObjectFromLocal};
