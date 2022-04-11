import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    marginHorizontal: 7,
  },
  formGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  middleForm: {
    marginVertical: -5,
  },
  svgIcon: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navigationBtn: {
    width: 38,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 4,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 7,
  },
});

export default styles;
