import React from 'react';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import {Dimensions, View} from 'react-native';
import PropTypes from 'prop-types';

import styles from './style';
import {RobotoBoldTextView} from '@components';
import {Languages, Color} from '@common';

function CarouselComp(props) {
  const {entries, renderItem, activeIndex, setActiveIndex} = props;
  const width = Dimensions.get('window').width;

  return (
    <View style={styles.container}>
      <View style={styles.carouselHeader}>
        <RobotoBoldTextView style={styles.CarouselTitle}>
          {Languages.Promotions}
        </RobotoBoldTextView>

        <RobotoBoldTextView style={styles.CarouselTitle}>
          {Languages.SeeAll}
        </RobotoBoldTextView>
      </View>
      <Carousel
        data={entries}
        renderItem={renderItem}
        sliderWidth={width}
        itemWidth={width - 120}
        activeSlideAlignment={'start'}
        layout="default"
        contentContainerCustomStyle={styles.sliderContentContainer}
        onSnapToItem={(index) => {
          setActiveIndex(index);
        }}
      />

      <Pagination
        dotsLength={entries.length}
        activeDotIndex={activeIndex}
        containerStyle={styles.paginationContainer}
        dotColor={Color.secondaryTextColor}
        dotStyle={styles.paginationDot}
        inactiveDotColor={Color.dotColor}
      />
    </View>
  );
}

CarouselComp.propTypes = {
  entries: PropTypes.array,
  renderItem: PropTypes.func,
};

export default CarouselComp;
