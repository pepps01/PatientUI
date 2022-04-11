import {StyleSheet} from 'react-native';
import {
  pixelSizeVertical,
  pixelSizeHorizontal,
  widthPixel,
  heightPixel,
} from '../../../utils/normalize';

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
  },
  indicator: {
    marginTop: -50,
    flex: 1,
    justifyContent: 'center',
  },
  startContainer: {
    borderWidth: 1.5,
    backgroundColor: 'transparent',
    paddingHorizontal: pixelSizeHorizontal(10),
    paddingVertical: pixelSizeVertical(10),
    borderColor: 'white',
    borderRadius: 10,
  },
  contentsContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: pixelSizeHorizontal(13),
    paddingVertical: pixelSizeVertical(15),
    borderColor: 'white',
  },
  switchBtnRoot: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    width: widthPixel(167),
    height: heightPixel(38),
    borderRadius: 5,
  },
  switchButton: {
    width: widthPixel(74),
    height: '100%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  couponCard: {
    marginVertical: pixelSizeVertical(25),
    width: '100%',
  },
  couponImage: {
    width: '100%',
    borderRadius: 10,
  },
  formRoot: {
    marginTop: 10,
  },
  formContainer: {
    marginTop: 15,
  },
  formGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  middleForm: {
    marginVertical: -13,
  },
  svgIcon: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '90%',
  },
  formDesc: {
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnBottom: {
    marginTop: 5,
    marginBottom: 10,
  },
});

export default styles;
