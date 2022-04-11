import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 8,
  },
  imageNameContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },
  nameTitleContainer: {
    marginLeft: 20,
    flexGrow: 1,
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 12,
  },
  ratingStars: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarContent: {
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textName: {
    fontFamily: 'Muli-Bold',
    lineHeight: 23,
  },
  textInfo: {
    fontFamily: 'Muli-SemiBold',
    lineHeight: 22,
  },
  feeText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarItems: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  calendarText: {
    fontFamily: 'Muli-SemiBold',
    lineHeight: 22,
    marginLeft: 8,
  },
  infoText: {
    marginBottom: 5,
  },
});

export default styles;
