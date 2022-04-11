import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: 50,
    height: 50,
    borderRadius: 6,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 10,
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
  },
  profileTextContainer: {
    marginLeft: 15,
  },
  greetingText: {
    fontFamily: 'Muli-Bold',
    fontSize: 12,
    marginTop: 10,
  },
  notificationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 42,
    height: 42,
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 10,
  },
});

export default styles;
