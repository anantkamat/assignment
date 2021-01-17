import React, {Component} from 'react';
import {View} from 'react-native';

import {RobotoBoldTextView} from '@components';
import styles from './style';

export class OrdersScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <RobotoBoldTextView>Empty</RobotoBoldTextView>
      </View>
    );
  }
}

export default OrdersScreen;
