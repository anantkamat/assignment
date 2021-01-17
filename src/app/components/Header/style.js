import {StyleSheet} from 'react-native';
import {Device} from '@common';

export default StyleSheet.create({
  container: {},
  statusContainer: {
    height: Device.ToolbarHeight,
  },
  profileImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  notifImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  headerBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 24,
  },
  welcomeText: {
    fontSize: 24,
  },
});
