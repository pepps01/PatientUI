import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {},
  navigationBtn: {
    width: 38,
    height: 38,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 4,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rootContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 129,
    height: 127,
    marginTop: 25,
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 20,
  },
  cardContainer: {
    height: 66,
    marginVertical: 15,
  },
  ambulanceDesc: {
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  formContainer: {
    marginTop: 20,
    marginBottom: 30,
  },
  callToAction: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginBottom: 10,
  },
  descText: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  btnAction: {
    width: 116,
    height: 50,
    borderRadius: 5,
    borderWidth: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
  },
  infoContainer: {
    width: 116,
    height: 50,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 8,
    justifyContent: 'center',
  },
  timeContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    marginTop: 12,
  },
});

export default styles;
