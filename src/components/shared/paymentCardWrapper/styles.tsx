import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginVertical: 10,
  },
  topView: {
    height: '45%',
    flex: 2,
    marginVertical: 15,
  },
  bottomView: {
    height: '45%',
    flex: 2,
  },
  footer: {
    height: '10%',
    flex: 1,
    marginBottom: -20,
  },
  description: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paymentSelection: {
    marginTop: 15,
    marginHorizontal: 8,
  },
  layout: {
    height: 45,
    marginVertical: 7,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  imageText: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInfo: {
    marginLeft: 15,
  },
  clickDropdown: {
    height: 29,
    width: 29,
    borderRadius: 5,
    backgroundColor: '#DFDAF8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkBox: {
    height: 10,
    width: 10,
    borderRadius: 5,
    borderWidth: 0.5,
  },
  cardDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
    position: 'relative',
  },
  cardInfo: {
    width: 142,
    height: 118,
    borderRadius: 10,
    paddingLeft: 20,
    justifyContent: 'center',
  },
  titleCard: {
    justifyContent: 'center',
  },
  overlayPattern: {
    ...StyleSheet.absoluteFillObject,
    opacity: 1,
  },
  cardFooter: {
    position: 'absolute',
    bottom: 10,
    marginHorizontal: 20,
  },
  wrapper: {
    paddingHorizontal: 12,
    height: 199,
    marginTop: 10,
    borderRadius: 5,
  },
});

export default styles;
