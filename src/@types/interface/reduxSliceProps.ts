export interface BookAmbulanceState {
  loading: true;
  currentLocation: any | null;
  destination: any | null;
  ambulance: any | null;
  error: string | null;
  mode: string | any;
}

export interface AuthState {
  loading: boolean;
  authenticated: boolean;
  user: any | null;
  checkingUser: boolean;
  viewedOnboarding: null | any;
}

export interface ProductTypes {
  availableSize: any | null;
  brand: string;
  category: {productCategoryId: number; productCategoryName: string};
  createDate: string;
  description: string | null;
  discountAvailable: string;
  discountPercentage: string | null;
  images: any[];
  isFreeDelivery: string | any;
  name: string;
  offerShippingWarranty: string;
  pharmacistId: number;
  price: number;
  productId: number;
  quantity: number;
  specialOffer: null;
  status: string;
  storeId: number;
  vendor: string;
  weight: string | any;
}

export interface ProductSliceState {
  loading: boolean;
  products: ProductTypes[];
  error: boolean;
  vendor: VendorSliceTypes[];
  errorVendor: boolean;
}
export interface CartItemType {
  product: ProductTypes;
  numberOfItems: number;
  totalAmount: number;
}

export interface CartSliceType {
  cartItems: CartItemType[];
  cartTotalAmount: number;
  productInCart: number;
  loading: boolean;
  VAT: number;
  subTotal: number;
}

export interface VendorSliceTypes {
  storeId: number | any;
  pharmacistId: any;
  email: string;
  pharmacistName: null;
  storeName: string | any;
  mainAddress: string;
  latitude: string | number;
  longitude: string | number;
  category: string;
  altAddress: any | null;
  phone: string;
  logo: any;
  countryId: string;
  state_id: string;
  status: string;
}
