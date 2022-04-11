import {StyleSheet, Dimensions} from 'react-native';
import {fontPixel, pixelSizeHorizontal} from '../utils/normalize';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  topDrawer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flex: 1,
  },
  middleDrawer: {
    flex: 3,
  },
  drawerFooter: {
    flex: 1,
    alignSelf: 'stretch',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  textImage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 5,
  },
  closeButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#9183FF',
  },
  boxContent: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    marginTop: 6,
    marginLeft: 8,
    marginVertical: 10,
  },
  svgIcons: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  settings: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
  },
  divider: {
    width: 1,
    height: 20,
  },
  /* DashboardTabSelector Styles */
  tabSelectorContainer: {
    borderRadius: 30,
    height: 90,
    justifyContent: 'flex-end',
    shadowOpacity: 0.7,
    shadowRadius: 10,
    shadowOffset: {
      height: 3,
      width: 0,
    },
    elevation: 13,
  },
  rootComponentView: {
    flex: 1,
  },
  navigationBtnContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingHorizontal: pixelSizeHorizontal(13),
    width,
  },
});

export default styles;
