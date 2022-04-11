import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  imageTop: {
    opacity: 0.5,
  },
  subText: {
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  formContainer: {
    marginTop: 30,
  },
  inputContainer: {
    width: '75%',
  },
  passwordThumbContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  thumbPrintContainer: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 56,
    maxWidth: 65,
    borderRadius: 10,
  },
  forgotPasswordInput: {
    marginVertical: 10,
    alignItems: 'flex-end',
  },
  buttonContainer: {
    marginTop: 20,
  },
});

export default Styles;
