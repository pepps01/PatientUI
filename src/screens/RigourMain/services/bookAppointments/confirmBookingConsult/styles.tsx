import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {},
  navigationBtn: {
    width: 38,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imageNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
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
  textName: {
    fontFamily: 'Muli-Bold',
    lineHeight: 18,
    paddingTop: 5,
  },
  textSpec: {
    fontFamily: 'Muli-SemiBold',
    lineHeight: 18,
    paddingTop: 4,
  },
  textDesc: {
    textAlign: 'justify',
  },
});

export default styles;
