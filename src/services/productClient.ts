import {create} from 'apisauce';
import cache from '../utils/cache';

const RootAPI = create({
  baseURL: 'https://rigourservice.afrihealthtesting.com/api/account',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

const getApi = RootAPI.get;
RootAPI.get = async (url, params, axiosConfig): Promise<any> => {
  const response = await getApi(url, params, axiosConfig);

  // Store the response using cache
  if (response.ok) {
    cache.store(url, response?.data);
    return response;
  }

  // Return the cached data or fresh data
  const data: any = await cache.get(url);
  return data ? {ok: true, data} : response;
};

export default RootAPI;
