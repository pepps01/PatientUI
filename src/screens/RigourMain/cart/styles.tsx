import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  titleViewStyle: {
    marginLeft: -25,
  },
  removeItem: {
    alignSelf: 'flex-end',
    paddingHorizontal: 40,
  },
  emptyCartContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyCartSvg: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -85,
    marginVertical: 25,
  },
  textContainer: {
    marginVertical: 25,
    alignItems: 'center',
  },
  textTitle: {
    marginVertical: 10,
  },
  textSubtitle: {
    textAlign: 'center',
    paddingHorizontal: 90,
  },
  cartRootContainer: {
    flex: 1,
  },
  cartItemsList: {
    flex: 2.8,
    paddingHorizontal: 30,
    marginTop: 20,
  },
  promoContainer: {
    flex: 0.5,
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 40,
  },
  totalContainer: {
    flex: 1.7,
    minHeight: 180,
    marginHorizontal: 20,
    marginBottom: 25,
    borderRadius: 10,
    paddingHorizontal: 20,
  },
  output: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  divider: {
    marginVertical: 9,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderRadius: 5,
    height: 0,
  },
  totalOutput: {
    paddingTop: 15,
  },
  calculation: {
    flex: 1,
    paddingTop: 15,
  },
});

export default styles;
