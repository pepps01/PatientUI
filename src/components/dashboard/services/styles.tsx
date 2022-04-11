import {StyleSheet} from 'react-native';
import {pixelSizeHorizontal} from '../../../utils/normalize';

const styles = StyleSheet.create({
  container: {},
  cardContainer: {
    marginTop: 20,
    marginBottom: 10,
    width: 120,
    height: 117,
    marginLeft: 25,
  },
  cardContent: {
    justifyContent: 'space-between',
    flexDirection: 'column',
    flexGrow: 1,
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  icon: {
    width: 33,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  serviceName: {
    lineHeight: 22,
  },
  svgView: {
    ...StyleSheet.absoluteFillObject,
    opacity: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
