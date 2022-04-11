import {StyleSheet} from 'react-native';
import {pixelSizeHorizontal} from '../../../utils/normalize';

const styles = StyleSheet.create({
  cardContainer: {
    borderRadius: 10,
    width: '40%',
    height: 170,
    marginHorizontal: pixelSizeHorizontal(10),
    justifyContent: 'center',
  },
  cardGrid: {
    padding: pixelSizeHorizontal(15),
  },
  imageGrid: {
    alignItems: 'center',
    height: 69,
    justifyContent: 'center',
    width: 80,
  },
  image: {
    width: 80,
    height: 69,
  },
  drugsDescription: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 18,
  },
  namePriceTitle: {
    flexDirection: 'column',
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 20,
    borderRadius: 50,
    borderWidth: 1,
  },
});

export default styles;
