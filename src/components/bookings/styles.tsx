import {StyleSheet} from 'react-native';
import {
  pixelSizeVertical,
  pixelSizeHorizontal,
  widthPixel,
  heightPixel,
} from '../../utils/normalize';

const styles = StyleSheet.create({
  container: {
    paddingVertical: pixelSizeVertical(13),
    paddingHorizontal: pixelSizeHorizontal(13),
  },
  withButton: {
    height: heightPixel(180),
    marginBottom: 25,
  },
  cardContainer: {
    height: heightPixel(116),
    marginBottom: 25,
  },
  cardContent: {
    paddingVertical: pixelSizeVertical(13),
    paddingHorizontal: pixelSizeHorizontal(13),
  },
  topContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: widthPixel(38),
    height: heightPixel(38),
    borderRadius: 5,
  },
  textContent: {
    marginLeft: 15,
  },
  calendarContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    borderRadius: 5,
    marginTop: 10,
    height: heightPixel(40),
    paddingHorizontal: 7,
  },
  calendarItems: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarText: {
    fontFamily: 'Muli-Bold',
    lineHeight: 22,
    marginLeft: 5,
  },
  roundIcon: {
    width: 6,
    height: 6,
    borderRadius: 50,
    backgroundColor: '#00D73C',
  },
  roundComplete: {
    width: 13,
    height: 13,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E3FFF8',
  },
  roundCancel: {
    width: 13,
    height: 13,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFEAEA',
  },
  divider: {
    height: 0.7,
    marginTop: 3,
  },
  bottomContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 13,
    width: '100%',
  },
  button: {
    width: '47%',
    height: heightPixel(40),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
