import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {ReactNode} from 'react';
import {
  TextInputProps as RNCustomTextInput,
  TouchableOpacityProps,
  TextStyle,
  ViewStyle,
  ImageProps,
} from 'react-native';

export interface CardViewType {
  children: ReactNode;
  customStyle?: any;
}

export interface CustomButtonProps extends TouchableOpacityProps {
  variant: 'default' | 'primary' | 'secondary';
  label: string;
  loading: boolean;
}

export interface CustomTextInputProps extends RNCustomTextInput {
  touched?: boolean | any;
  error?: string | any;
  customStyle?: any;
  direction?: 'ltr' | 'rtl' | 'password';
  icon?: any;
  onPress?: (event: Event) => void;
}

export interface ScreenDefaultProps {
  navigation: NativeStackNavigationProp<any, any>;
  route?: RouteProp<any, any>;
}

export interface SocialButtonProps extends TouchableOpacityProps {
  variant: 'facebook' | 'google' | 'twitter' | 'instagram';
  children: ReactNode;
  onPress?: () => void;
}

export type ServicesDashboardProps = {
  id?: number;
  name: string;
};

export interface ServicesDashboardItem {
  item: ServicesDashboardProps;
}

export type ProductCardProps = {
  id?: string;
  productImage?: any;
  productName?: string;
  productPrice?: string;
};

export interface ProductCardItems {
  item: ProductCardProps;
  index?: any;
}

export type IconType = {
  type?: any;
  name?: string;
  color?: string;
  size?: number;
  style?: any;
};

export type DoctorsProfileProps = {
  id: any;
  name: string;
  speciality: string;
  rating: number;
  location: string;
  price: string;
  hours: string;
};

export interface DoctorsProfileList {
  item: DoctorsProfileProps;
  index?: any;
  navigation?: any;
}

export type AmbulanceProfileProps = {
  id: any;
  name: string;
  distance: string;
  active: string;
};

export interface AmbulanceProfileList {
  item: AmbulanceProfileProps;
  index?: any;
  navigation?: any;
}

export interface SegmentControlProps {
  tabs: Array<string>;
  onChange: (arg0: any) => void;
  currentIndex: number | any;
  segmentedControlBackgroundColor?: string;
  paddingVertical?: number | any;
  activeSegmentBackgroundColor?: string;
  activeTextStyle?: TextStyle;
  inactiveTextStyle?: TextStyle;
  badgeTextStyle?: TextStyle;
  badgeValues?: Array<number | null>;
  inactiveBadgeStyle?: ViewStyle;
  activeBadgeStyle?: ViewStyle;
}

export interface currentLocation {
  latitude?: number | any;
  longitude?: number | any;
}

export interface hospitalLocation {
  _id: any;
  lat?: number | any;
  lng?: number | any;
  name?: string | any;
  vicinity?: string | any;
}

export type PaymentCardType = {
  children: ReactNode;
  customStyle?: any;
  label?: string | any;
};

export interface BookingsItemProps {
  item: any | [];
  index?: any;
  withButton?: boolean;
  status?: 'Confirmed' | 'Completed' | 'Canceled';
}

export interface AppNotificationProps {
  title: string | null;
  message: string | null;
}
export interface CustomHeaderProps {
  titleColor?: string | any;
  titleViewStyle?: ViewStyle;
  headerStyle?: ViewStyle;
  title?: string | any;
  children?: ReactNode;
  navigateTo: () => any;
}

export interface NavigationTabButtonProps {
  label: string;
  isDrawerOpen: any;
  isFocused: boolean;
  onPress: (event: any) => void;
  outerContainerStyle: any;
  svgContainerStyle: any;
}

export interface ProductItemProps {
  item: any;
  navigation: any;
  index: any;
  loading?: boolean;
}

export interface DropdownProps {
  children?: ReactNode;
  items: any[];
  placeholder: string;
  selectedItem: string;
  onSelectedItem: (item: any) => void;
}

export interface FetchingErrorBoxProps {
  btnTitle: string;
  onPress: () => any;
  label?: string | undefined;
}

export interface CartCounterProps {
  btnStyle?: ViewStyle | any;
  counter?: number;
  cartCountStyle?: ViewStyle | any;
  decreaseCount?: () => void;
  increaseCount?: () => void;
  iconSize?: number;
}
