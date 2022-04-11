import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  formOverlay: {
    height: 490,
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
  formContainer: {
    paddingHorizontal: 10,
  },
  editing: {
    paddingTop: 20,
  },
  formRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  formGroup: {
    marginTop: 4,
  },
  formSplit: {
    width: '45%',
  },
  buttonContainer: {
    flex: 1,
    marginHorizontal: 13,
    justifyContent: 'flex-end',
  },
});

export default styles;
