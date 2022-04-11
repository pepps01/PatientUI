import {StyleSheet} from 'react-native';

const Styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 35,
  },
  imageTop: {
    opacity: 0.5,
  },
  subText: {
    paddingVertical: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  formContainer: {
    marginTop: 10,
  },
  userNamesInputView: {
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  nameInput: {
    width: '47.5%',
  },
  inputContainer: {
    marginBottom: 10,
  },
  passwordInput: {
    flexGrow: 1,
  },
  loginBtnContainer: {
    width: '100%',
    marginTop: 20,
  },
});

export default Styles;
