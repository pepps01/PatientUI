import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cardContainer: {
    width: '38%',
    height: 175,
    marginHorizontal: 25,
  },
  cardGrid: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 20,
  },
  cardList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageGrid: {
    width: 64,
    height: 64,
    marginBottom: 6,
  },
  imageList: {
    width: 72,
    height: 71,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  textDesc: {
    fontFamily: 'Muli-SemiBold',
    textAlign: 'center',
    lineHeight: 19,
  },
  textInfo: {
    fontFamily: 'Muli-SemiBold',
  },
  activeHours: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  hoursText: {
    fontFamily: 'Muli-SemiBold',
    textAlign: 'center',
  },
  cardTextContainer: {
    marginLeft: 15,
  },
  hoursContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default styles;
