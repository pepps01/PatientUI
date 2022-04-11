import RootAPI from './productClient';

const getAllProducts = async (token: any): Promise<any> => {
  const header: any = RootAPI.setHeader('Authorization', `Bearer ${token}`);
  return RootAPI.get('/products', header);
};

const getAllCartItems = async (token: any): Promise<any> => {
  const header: any = RootAPI.setHeader('Authorization', `Bearer ${token}`);
  return RootAPI.get('/carts', header);
};

const getNearestPharmVendor = async (
  token: any,
  latitude: any,
  longitude: any,
): Promise<any> => {
  const header: any = RootAPI.setHeader('Authorization', `Bearer ${token}`);
  return RootAPI.get(
    `/vendors/nearme?latitude=${latitude.toString()}&longitude=${longitude.toString()}`,
    header,
  );
};

export default {
  getAllCartItems,
  getAllProducts,
  getNearestPharmVendor,
};
