import React from 'react';
import {Text} from 'react-native';
import styles from './style';

const SourceSansProRegTextView = props => {
  return (
    <Text
      style={[styles.SourceSansProRegTextView, styles.TextStyle, props.style]}>
      {props.children}
    </Text>
  );
};

const SourceSansProSemiBoldTextView = props => {
  return (
    <Text
      style={[
        styles.SourceSansProSemiBoldTextView,
        styles.TextStyle,
        props.style,
      ]}>
      {props.children}
    </Text>
  );
};

const SourceSansProBoldTextView = props => {
  return (
    <Text
      style={[styles.SourceSansProBoldTextView, styles.TextStyle, props.style]}>
      {props.children}
    </Text>
  );
};

const RobotoRegTextView = props => {
  return (
    <Text style={[styles.RobotoRegTextView, styles.TextStyle, props.style]}>
      {props.children}
    </Text>
  );
};

const RobotoBoldTextView = props => {
  return (
    <Text style={[styles.RobotoBoldTextView, styles.TextStyle, props.style]}>
      {props.children}
    </Text>
  );
};

const RobotoMediumTextView = props => {
  return (
    <Text style={[styles.RobotoMediumTextView, styles.TextStyle, props.style]}>
      {props.children}
    </Text>
  );
};

const BalooThambiRegTextView = props => {
  return (
    <Text
      style={[styles.BalooThambiRegTextView, styles.TextStyle, props.style]}>
      {props.children}
    </Text>
  );
};

const BalooThambiBoldTextView = props => {
  return (
    <Text
      style={[styles.BalooThambiBoldTextView, styles.TextStyle, props.style]}>
      {props.children}
    </Text>
  );
};

const BalooThambiMediumTextView = props => {
  return (
    <Text style={[BalooThambiMediumTextView, styles.TextStyle, props.style]}>
      {props.children}
    </Text>
  );
};

export {
  SourceSansProBoldTextView,
  SourceSansProSemiBoldTextView,
  SourceSansProRegTextView,
  RobotoBoldTextView,
  RobotoMediumTextView,
  RobotoRegTextView,
  BalooThambiBoldTextView,
  BalooThambiMediumTextView,
  BalooThambiRegTextView,
};
