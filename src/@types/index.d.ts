declare module '*.svg' {
  import {SvgProps} from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.jpg' {
  import {ImageSourcePropType} from 'react-native';
  const content: ImageSourcePropType;
  export default content;
}

declare module '*.png' {
  import {ImageSourcePropType} from 'react-native';
  const content: ImageSourcePropType;
  export default content;
}

declare module '*.json' {
  const content: any;
  export default content;
}

declare module 'react-native-cardview' {
  const content: any;
  export default content;
}

declare module '@env' {
  export const MAP_API_KEY: string;
  export const AGORA_APP_ID: string;
}
