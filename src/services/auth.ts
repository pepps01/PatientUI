import API from './apiClient';

const register = (data: any): any => {
  return API.post('/register', data);
};

const login = (data: any): any => {
  return API.post('/login', data);
};

const verifyOTP = (data: any): any => {
  return API.post('/verify-code', data);
};

const resendOTP = (data: any): any => {
  return API.post('/resend-verify-code', data);
};

const verifyPasswordOTP = (data: any): any => {
  return API.post('/verify-password-code', data);
};

const verifyPasswordReset = (data: any): any => {
  return API.post('/reset-password-mobile', data);
};

const sendPasswordReset = (data: any): any => {
  return API.post('/reset-password', data);
};

const updateProfile = async (values: any, token: any): Promise<any> => {
  const {
    firstName,
    lastName,
    phone,
    dob,
    address,
    gender,
    latitude,
    longitude,
  } = values;
  const data: any = {
    firstname: firstName,
    lastname: lastName,
    phone_number: phone,
    date_of_birth: dob,
    gender,
    address,
    latitude,
    longitude,
  };
  const header: any = API.setHeader('Authorization', `Bearer ${token}`);
  return await API.post('/account/patient/profile', data, header);
};

export default {
  register,
  login,
  updateProfile,
  verifyOTP,
  verifyPasswordOTP,
  verifyPasswordReset,
  resendOTP,
  sendPasswordReset,
};
