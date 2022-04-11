import {create} from 'apisauce';

const apiClient = create({
  baseURL: 'https://userservice.afrihealthtesting.com/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default apiClient;
