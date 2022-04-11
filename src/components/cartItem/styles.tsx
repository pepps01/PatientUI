import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  cartItems: {
    marginHorizontal: 5,
    minHeight: 65,
    marginVertical: 10,
    borderRadius: 10,
  },
  cartItemsContent: {
    flexDirection: 'row',
    padding: 5,
  },
  imageContainer: {
    width: 63,
    height: 55,
    borderRadius: 10,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  cartItemText: {
    flex: 1,
    paddingLeft: 25,
    paddingVertical: 3,
  },
  priceInfo: {
    paddingTop: 2,
  },
  cartCTA: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  button: {
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  cartCount: {
    paddingHorizontal: 7,
  },
});

export default styles;
