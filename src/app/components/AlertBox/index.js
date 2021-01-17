import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import PropTypes from 'prop-types';
import {Languages} from '@common';

import {RobotoBoldTextView, RobotoMediumTextView} from '@components';
import styles from './style';
import {alertLeft, alertRight} from '@images';

function AlertBox(props) {
  const {alertTitle, alertMessage, onPressAlert} = props;
  return (
    <TouchableOpacity
      activeOpacity={0.85}
      onPress={onPressAlert}
      style={styles.container}>
      <View style={styles.headerSec}>
        <Image source={alertLeft} style={styles.alertLeftIcon} />
        <RobotoBoldTextView style={styles.alertTitle}>
          {alertTitle}
        </RobotoBoldTextView>
        <Image source={alertRight} style={styles.alertRightIcon} />
      </View>

      <RobotoMediumTextView style={styles.alertMessage}>
        {alertMessage}
      </RobotoMediumTextView>
    </TouchableOpacity>
  );
}

AlertBox.propTypes = {
  alertTitle: PropTypes.string,
  alertMessage: PropTypes.string,
  onPressAlert: PropTypes.func,
};

AlertBox.defaultProps = {
  alertTitle: Languages.SearchHere,
  alertMessage: Languages.alertMessage,
};

export default AlertBox;
