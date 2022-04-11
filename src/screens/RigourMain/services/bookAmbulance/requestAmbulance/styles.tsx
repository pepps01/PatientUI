import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: '60%',
  },
  origin: {
    width: 50,
  },
  destination: {
    width: 50,
  },
  footer: {
    height: '40%',
    position: 'absolute',
    bottom: 0,
    padding: 10,
    alignItems: 'center',
    paddingBottom: 20,
  },
  drawer: {
    height: 4,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 7,
    borderRadius: 15,
  },
  divider: {
    height: 1,
    marginVertical: 5,
  },
  footerContent: {
    paddingHorizontal: 20,
  },
  footerContentItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    justifyContent: 'space-between',
  },
  textImage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    marginLeft: 7,
    marginTop: -15,
  },
  ambulanceCar: {
    width: 76,
    height: 80,
    padding: 10,
  },
  navigationBtn: {
    width: 38,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 4,
    marginLeft: 20,
    marginTop: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 9999,
    marginVertical: 35,
  },
});

export default styles;
