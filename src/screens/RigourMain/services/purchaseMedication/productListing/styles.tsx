import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cartBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row-reverse',
    position: 'relative',
  },
  cartContainer: {
    height: 38,
    width: 38,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderRadius: 7,
  },
  cartCounter: {
    position: 'absolute',
    zIndex: 999,
    top: -10,
    left: -10,
    borderRadius: 25,
    width: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  segementedBox: {
    marginHorizontal: 17,
  },
  button: {
    height: 38,
    width: 90,
    borderRadius: 5,
  },
  vendors: {
    marginTop: 25,
  },
  vendorContents: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  allProducts: {
    marginTop: 25,
  },
  rootContainer: {
    flex: 1,
    marginTop: 25,
    marginBottom: 30,
  },
});

export default styles;
