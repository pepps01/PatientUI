import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInfo: {
    fontFamily: 'Muli-SemiBold',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: '100%',
    maxWidth: 72,
    height: 71,
  },
  image: {
    width: '100%',
    height: 71,
    borderRadius: 20,
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
