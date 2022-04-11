import AsyncStorage from '@react-native-async-storage/async-storage';
import {KEYS} from '../../constants';

const setUserData = async (data: any): Promise<any> => {
  const userData = data?.data;
  const authToken = data?.token;
  try {
    await storeUserData(KEYS?.USER_INFO_KEY, userData);
    await storeToken(KEYS?.AUTH_TOKEN_KEY, authToken);
  } catch (error) {
    console.log(`Error in setUserData: ${error}`);
  }
};

const getToken = async (key: string): Promise<any> => {
  try {
    return await AsyncStorage.getItem(key);
  } catch (error) {
    console.log(`Error in GetToken: ${error}`);
  }
};

const storeToken = async (key: string, authToken: string): Promise<any> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(authToken));
  } catch (error) {
    console.log(`Error in StoreToken: ${error}`);
  }
};

const removeToken = async (key: string): Promise<any> => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.log(`Error in RemoveToken: ${error}`);
  }
};

const storeUserData = async (key: string, userData: any): Promise<any> => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(userData));
  } catch (error) {
    console.log(`Error in StoreUserData: ${error}`);
  }
};

export default {getToken, storeToken, removeToken, setUserData, storeUserData};
