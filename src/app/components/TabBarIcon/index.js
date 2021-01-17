import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import styles from './style';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class TabBarIcon extends PureComponent {
  static propTypes = {
    icon: PropTypes.any,
    tintColor: PropTypes.string,
  };

  render() {
    const {icon, tintColor} = this.props;
    return (
      <View style={styles.container}>
        <FontAwesome5 size={25} color={tintColor} name={icon} solid />
      </View>
    );
  }
}

export default TabBarIcon;
