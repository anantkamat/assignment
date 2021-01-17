import {StyleSheet} from 'react-native';
import {Color} from '@common';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    minHeight: 60,
    backgroundColor: Color.searchBG,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingRight: 16,
    borderRadius: 16,
  },
  input: {
    flex: 1,
    height: 48,
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Regular',
    color: Color.Cinder,
    padding: 0,
    paddingRight: 16,
  },
  buttonContainer: {
    marginRight: 11,
  },
  searchIcon: {
    marginLeft: 20,
    marginRight: 10,
    width: 24,
    height: 24,
  },
  rowCenterSpace: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  searchSec: {
    flex: 0.8,
  },
  filterSec: {
    flex: 0.2,
    alignItems: 'flex-end',
  },
  filterIcon: {
    height: 60,
    width: 60,
  },
});
