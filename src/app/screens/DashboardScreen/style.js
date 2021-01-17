import {StyleSheet} from 'react-native';
import {Color, Device} from '@common';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: Color.white,
  },
  secondaryText: {
    marginTop: 8,
    color: Color.secondaryTextColor,
  },
  searchSec: {
    paddingVertical: 16,
  },
  carouselItem: {
    width: Device.width - 40,
  },
  carouselSec: {
    height: 200,
  },
  scrollView: {
    paddingTop: 70,
    flex: 1,
    alignItems: 'center',
  },
  separator: {
    marginTop: 24,
  },
  scrollContainer: {
    marginBottom: 90,
  },
});
