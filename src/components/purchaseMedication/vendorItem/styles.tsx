import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  contents: {
    width: 261,
    height: 111,
    marginLeft: 20,
  },
  vendorContents: {
    flexDirection: 'row',
    paddingVertical: 20,
    paddingHorizontal: 13,
  },
  vendorImage: {
    width: 76,
    height: 76,
    borderRadius: 5,
  },
  vendorDetails: {
    flex: 1,
    marginLeft: 20,
  },
  addressInfo: {
    paddingTop: 2,
    fontSize: 12,
    lineHeight: 18,
    fontFamily: 'Muli-Regular',
  },
  icon: {
    paddingRight: 2,
  },
  ratingInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  infoText: {
    fontSize: 12,
    lineHeight: 22,
    fontFamily: 'Muli-SemiBold',
    marginLeft: 5,
  },
});

export default styles;
