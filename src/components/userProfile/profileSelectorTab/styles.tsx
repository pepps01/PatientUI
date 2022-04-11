import {Dimensions, StyleSheet} from 'react-native';

const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginHorizontal: 45,
    marginBottom: 25,
  },
  tabsContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  activeCircle: {
    width: 5,
    height: 5,
    borderRadius: 50,
    marginRight: 6,
  },
});

export default styles;
