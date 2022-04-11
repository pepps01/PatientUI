import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  formOverlay: {
    minHeight: 485,
    borderRadius: 40,
    marginBottom: 35,
    padding: 10,
  },
  editContainer: {
    alignSelf: 'flex-end',
    justifyContent: 'center',
    alignItems: 'center',
    width: 25,
    height: 25,
    borderRadius: 50,
    margin: 10,
  },
  editing: {
    paddingTop: 20,
  },
  formContainer: {
    paddingHorizontal: 10,
  },
  formGroup: {
    marginTop: 4,
    marginBottom: 13,
  },
  formLabel: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  required: {
    marginHorizontal: 2,
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 13,
    justifyContent: 'flex-end',
  },
});

export default styles;
