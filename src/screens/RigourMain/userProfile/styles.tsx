import {Dimensions, StyleSheet} from 'react-native';
import {pixelSizeVertical} from '../../../utils/normalize';

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  box: {
    ...StyleSheet.absoluteFillObject,
  },
  titleStyle: {
    marginLeft: -45,
  },
  root: {
    marginTop: pixelSizeVertical(70),
    flex: 1,
  },
  container: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imageRootContainer: {
    width: 80,
    height: 80,
    position: 'relative',
    marginVertical: 10,
  },
  imageContainer: {
    width: 80,
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderWidth: 2,
    shadowOpacity: 0.7,
    shadowRadius: 10,
    shadowOffset: {
      height: 3,
      width: 0,
    },
    elevation: 12,
  },
  image: {
    width: 77,
    height: 77,
    borderRadius: 10,
  },
  tabsContainer: {
    marginTop: 20,
    marginBottom: 15,
    marginHorizontal: 20,
  },
  editOverlay: {
    position: 'absolute',
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
    bottom: -20,
    right: -20,
  },
  editContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
    borderRadius: 50,
    margin: 10,
  },
});

export default styles;
