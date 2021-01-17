// External Imports
import React from 'react';
import PropTypes from 'prop-types';
import {View, TextInput, Image, TouchableOpacity} from 'react-native';

// Internal Imports
import styles from './style';
import {Languages, Color} from '@common';
import {searchIcon, filterIcon} from '@images';

const SquareSearchBar = (props) => {
  const {
    placeholder,
    onChangeText,
    placeholderTextColor,
    containerStyle,
    onPressFilter,
    isEditable,
    value,
  } = props;

  return (
    <View style={styles.rowCenterSpace}>
      <View style={styles.searchSec}>
        <View style={[styles.container, containerStyle]}>
          <Image source={searchIcon} style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            placeholder={placeholder}
            value={value}
            placeholderTextColor={placeholderTextColor}
            onChangeText={(text) => {
              onChangeText(text);
            }}
            editable={isEditable}
          />
        </View>
      </View>

      <TouchableOpacity
        onPress={onPressFilter}
        activeOpacity={0.85}
        style={styles.filterSec}>
        <Image source={filterIcon} style={styles.filterIcon} />
      </TouchableOpacity>
    </View>
  );
};

SquareSearchBar.propTypes = {
  placeholder: PropTypes.string,
  onChangeText: PropTypes.func,
  placeholderTextColor: PropTypes.string,
  containerStyle: PropTypes.object,
  onPressFilter: PropTypes.func,
};

SquareSearchBar.defaultProps = {
  placeholder: Languages.SearchHere,
  onChangeText: () => {},
  placeholderTextColor: Color.secondaryTextColor,
  isEditable: true,
};

export default SquareSearchBar;
