import {Dimensions, StyleSheet} from 'react-native';
import {pixelSizeVertical} from '../../../../../utils/normalize';

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 1,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1.3,
  },
  image: {
    width: 122,
    height: 122,
    borderRadius: 10,
    marginBottom: pixelSizeVertical(20),
  },
  body: {
    flex: 3,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    shadowOpacity: 0.7,
    shadowRadius: 10,
    shadowOffset: {
      height: 3,
      width: 0,
    },
    elevation: 12,
    paddingHorizontal: 25,
  },
  footer: {
    flex: 0.6,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 25,
    paddingVertical: pixelSizeVertical(10),

    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
    width: WIDTH,
  },
  priceTag: {
    alignSelf: 'flex-end',
    width: 78,
    height: 31,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    borderRadius: 50,
    borderWidth: 1,
  },
  cartCount: {
    paddingHorizontal: 10,
  },
  productDesc: {
    marginTop: pixelSizeVertical(19),
  },
  vendorTitle: {
    marginTop: pixelSizeVertical(19),
  },
});

export default styles;
