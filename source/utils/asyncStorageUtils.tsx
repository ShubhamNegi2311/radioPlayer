// Async Storage Utils for maintaining any operation and functions related to it.
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * function SaveDataToAsyncStorage: it will store any value that is provided, with key mentioned into Async Storage.
 * @param {String} key : key defines key that is used for storing data, keys are mentioned in Constants under SK.
 * @param {Any} value : value can be anything as we have not mentioned any specific type here.
 * does not return anything.
 */

export const SaveDataToAsyncStorage = async (key: string, value: string) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    // error in saving data to async storage.
  }
};

/**
 *
 * @param key
 */
export const DeleteDataFromAsyncStorage = async (key: string) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    // error in deleting data from async storage.
  }
};

/**
 *
 * @param key
 * @returns
 */
export const ReadDataFromAsyncStorage = async (key: string) => {
  let value: string | null = '';
  try {
    value = await AsyncStorage.getItem(key);
  } catch (error) {
    // error in getting data from async storage.
  }
  return value;
};

/**
 * Removes whole AsyncStorage data, for all clients, libraries, etc.
 */
export const ClearDataFromAsyncStorage = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    // error in deleting data from async storage.
  }
};
