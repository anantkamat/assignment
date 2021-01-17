import React from 'react';
import {View} from 'react-native';
import RootNavigator from '@screens/RootNavigator';

const App: () => React$Node = () => {
  return (
    <View style={{flex: 1}}>
      <RootNavigator />
    </View>
  );
};

export default App;
