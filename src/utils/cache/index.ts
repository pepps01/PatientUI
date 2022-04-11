import AsyncStorage from '@react-native-async-storage/async-storage';
import moment from 'moment';
import {KEYS} from '../../constants';

const expiryInMinutes = 5;

// Store Data as Cache with AsyncStorage
const store = async (key: any, value: any): Promise<any> => {
  try {
    const item = {
      value,
      timestamp: Date.now(),
    };
    await AsyncStorage.setItem(KEYS?.CACHE_PREFIX + key, JSON.stringify(item));
  } catch (error) {
    console.log(`Error storing cache ${error}`);
  }
};

// Check for data so as to delete the expiring time
const isExpiring = (item: any) => {
  const now = moment(Date.now());

  const storedTime = moment(item.timestamp);
  return now.diff(storedTime, 'minutes') > 5;
};

// Get data store as a cache
const get = async (key: any) => {
  try {
    const value: any = await AsyncStorage.getItem(KEYS?.CACHE_PREFIX + key);
    const item = JSON.parse(value);

    if (!item) return null;

    if (isExpiring(item)) {
      // Command Query Separation (CQS)
      await AsyncStorage.removeItem(KEYS?.CACHE_PREFIX + key);

      return null;
    }

    return item.value;
  } catch (error) {
    console.log(`Error getting cache ${error}`);
  }
};

export default {
  store,
  get,
};
