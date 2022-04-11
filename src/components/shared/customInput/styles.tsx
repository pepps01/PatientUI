import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    height: 56,
    borderWidth: 1,
    marginVertical: 5,
  },
  innerField: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flexGrow: 1,
    padding: 6,
  },
  inputRTL: {
    flexGrow: 1,
    padding: 8,
  },
  divider: {
    height: '100%',
    width: 1,
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
