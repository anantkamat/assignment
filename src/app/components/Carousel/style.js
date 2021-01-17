import {StyleSheet} from 'react-native';
import {Color} from '@common';

export default StyleSheet.create({
  container: {
    paddingVertical: 24,
  },
  paginationContainer: {
    paddingVertical: 16,
  },
  sliderContentContainer: {
    padding: 0,
  },
  CarouselTitle: {
    fontSize: 20,
  },
  carouselHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 24,
  },
  paginationDot: {
    width: 16,
    height: 16,
    borderRadius: 8,
  },
});
