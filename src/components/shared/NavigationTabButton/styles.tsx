import {StyleSheet, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  outerAnimatedContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  innerAnimatedContainer: {
    flexDirection: 'column',
    width: width / 4,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  svgIconsContainer: {
    borderRadius: 25,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default styles;
