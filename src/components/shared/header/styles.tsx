import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {},
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    zIndex: 10,
  },
  navigationBtn: {
    width: 38,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 4,
  },
  middleItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
