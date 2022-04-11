import {StyleSheet} from 'react-native';
import {pixelSizeHorizontal} from '../../../utils/normalize';

const styles = StyleSheet.create({
  cardViewContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: 72,
    height: 71,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  textContainer: {
    marginLeft: pixelSizeHorizontal(20),
  },
  description: {
    flexDirection: 'row',
  },
  distanceStatus: {
    flexDirection: 'column',
  },
  ambulanceInfo: {
    flexDirection: 'column',
    paddingLeft: pixelSizeHorizontal(15),
  },
});

export default styles;
