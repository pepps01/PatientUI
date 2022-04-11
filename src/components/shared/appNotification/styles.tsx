import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  root: {
    position: 'absolute',
    top: 40,
    zIndex: 999,
    width: '100%',
  },
  container: {
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 25,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  status: {
    height: '100%',
    borderWidth: 1,
    width: 8,
    borderTopLeftRadius: 7,
    borderBottomLeftRadius: 7,
  },
});

export default styles;
