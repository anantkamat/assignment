import React from 'react';
import {View, StatusBar, Image, TouchableOpacity} from 'react-native';

import {Device, Languages} from '@common';
import styles from './style';
import {SourceSansProBoldTextView} from '@components';
import {HeaderIcon, notificationIcon} from '@images';

function Header(props) {
  const {onPressProfile, onPressNotif} = props;

  return (
    <View style={styles.container}>
      <View style={styles.statusContainer}>
        <StatusBar
          barStyle={'dark-content'}
          animated
          hidden={!Device.isIphoneX}
        />
      </View>

      <View style={styles.headerBottom}>
        <TouchableOpacity activeOpacity={0.85} onPress={onPressProfile}>
          <Image
            ref={(comp) => (this._image = comp)}
            source={HeaderIcon}
            style={styles.profileImage}
          />
        </TouchableOpacity>
        <SourceSansProBoldTextView style={styles.welcomeText}>
          {Languages.WelcomeHeader}
        </SourceSansProBoldTextView>

        <TouchableOpacity activeOpacity={0.85} onPress={onPressNotif}>
          <Image
            ref={(comp) => (this._image = comp)}
            source={notificationIcon}
            style={styles.notifImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

Header.propTypes = {};

export default Header;
