import {useState} from 'react';

export const useRequestApi = (apiFunc: any): any => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const request = async (...args: any): Promise<any> => {
    setLoading(true);
    const response = await apiFunc(...args);
    setLoading(false);

    setError(!response.ok);
    setData(response?.data);

    return response;
  };

  return {loading, error, data, request};
};
