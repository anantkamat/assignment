import React from 'react';
import {View, Image} from 'react-native';
import PropTypes from 'prop-types';

import styles from './style';
import {RobotoBoldTextView} from '@components';

function RoundedItem(props) {
  const {item} = props;
  return (
    <View style={styles.container}>
      <Image source={item.image} style={styles.carouselItem} />
      <RobotoBoldTextView style={styles.title}>{item.name}</RobotoBoldTextView>
    </View>
  );
}

RoundedItem.propTypes = {
  item: PropTypes.object,
};

export default RoundedItem;
