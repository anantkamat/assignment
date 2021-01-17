import {Device} from '@common';
import {StyleSheet} from 'react-native';
import {Color} from '@common';

export default StyleSheet.create({
  container: {
    width: Device.width / 4.5,
    alignItems: 'center',
  },
  title: {
    color: Color.secondaryTextColor,
    marginTop: 8,
  },
});
