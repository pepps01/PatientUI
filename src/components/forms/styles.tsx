import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  input: {
    width: '75%',
  },
  calendarPicker: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    maxWidth: 65,
  },
  dobView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  confirmInput: {
    height: '100%',
    borderWidth: 1,
    width: 5,
    borderTopRightRadius: 12,
    borderBottomRightRadius: 12,
  },
});

export default styles;
