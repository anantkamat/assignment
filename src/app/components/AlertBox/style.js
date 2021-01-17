import {StyleSheet} from 'react-native';
import {Color} from '@common';

export default StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: Color.alertBG,
    borderRadius: 16,
    alignItems: 'center',
  },
  headerSec: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  alertLeftIcon: {
    width: 30,
    height: 30,
  },
  alertRightIcon: {
    width: 24,
    height: 24,
  },
  alertTitle: {
    fontSize: 20,
  },
  alertMessage: {
    color: Color.secondaryTextColor,
    paddingHorizontal: 16,
    lineHeight: 25,
  },
});
