import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {position: 'relative', zIndex: 1, marginVertical: 3},
  dropdown: {
    minHeight: 56,
    borderWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    borderRadius: 10,
    paddingHorizontal: 16,
  },
  dropdownItem: {
    position: 'absolute',
    top: 60,
    left: 0,
    right: 0,
    zIndex: 999,
    flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    minHeight: 60,
    paddingHorizontal: 16,
    paddingVertical: 7,
  },
  dropdownContents: {
    paddingVertical: 10,
  },
});

export default styles;
