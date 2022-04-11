import {Dimensions, StyleSheet} from 'react-native';
import {pixelSizeVertical} from '../../../../../utils/normalize';

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {},
  overlay: {
    ...StyleSheet.absoluteFillObject,
    opacity: 1,
  },
  header: {
    flex: 1.5,
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
    marginTop: pixelSizeVertical(5),
  },
  footer: {
    flex: 1,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    paddingHorizontal: 25,
    justifyContent: 'flex-end',
    position: 'absolute',
    bottom: 0,
    width: WIDTH,
  },
  navigationBtn: {
    width: 38,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 4,
  },
  headerContent: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -15,
  },
  profileImageContainer: {
    height: 76,
    width: 76,
  },
  profileImage: {
    height: '100%',
    width: '100%',
  },
  ratings: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  status: {
    position: 'absolute',
    bottom: -3,
    right: 0,
    paddingVertical: 6,
  },
  statusText: {
    fontFamily: 'Muli-SemiBold',
  },
  bodyContents: {
    paddingTop: 8,
  },
  experienceRating: {
    marginVertical: pixelSizeVertical(20),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ratingExpContainer: {
    width: 89,
    height: 83,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  locationContents: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navigationPin: {
    width: 38,
    height: 38,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  locationNameAddress: {
    marginLeft: 10,
    marginVertical: 8,
  },
  footerViewContents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  footerText: {
    fontFamily: 'Muli-Regular',
    lineHeight: 18,
    paddingTop: 4,
  },
  locationAddress: {
    fontFamily: 'Muli-Regular',
  },
});

export default styles;
