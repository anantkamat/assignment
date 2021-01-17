import 'react-native-gesture-handler';
import React from 'react';
import {useSelector} from 'react-redux';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {Color} from '@common';

import {TabBarIcon} from '@components';
import DashboardScreen from './DashboardScreen';
import FavoritesScreen from './FavoritesScreen';
import MyCartScreen from './MyCartScreen';
import OrderScreen from './OrdersScreen';
import {Languages} from '@common';

const DashboardStack = createStackNavigator();
const OrderStack = createStackNavigator();
const FavoriteStack = createStackNavigator();
const MyCartStack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function DashboardStackScreen() {
  return (
    <DashboardStack.Navigator headerMode="none">
      <DashboardStack.Screen name="Dashboard" component={DashboardScreen} />
    </DashboardStack.Navigator>
  );
}

function OrderStackScreen() {
  return (
    <OrderStack.Navigator headerMode="none">
      <OrderStack.Screen name="Orders" component={OrderScreen} />
    </OrderStack.Navigator>
  );
}

function FavoriteStackScreen() {
  return (
    <FavoriteStack.Navigator headerMode="none">
      <FavoriteStack.Screen name="Favorites" component={FavoritesScreen} />
    </FavoriteStack.Navigator>
  );
}

function MyCartStackScreen() {
  return (
    <MyCartStack.Navigator headerMode="none">
      <MyCartStack.Screen name="MyCart" component={MyCartScreen} />
    </MyCartStack.Navigator>
  );
}

function BottomTabStack(props) {
  const {language} = useSelector((state) => state);

  return (
    <View style={{flex: 1}}>
      <BottomTab.Navigator
        initialRouteName="Home"
        tabBarOptions={{
          activeTintColor: Color.activeTintColor,
          labelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
          keyboardHidesTabBar: true,
          style: {
            backgroundColor: Color.white,
            elevation: 10,
            shadowColor: Color.black,
            shadowOffset: {width: 0, height: 2},
            shadowOpacity: 0.9,
            shadowRadius: 3,
            height: 83,
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            borderTopColor: 'transparent',
            paddingBottom: 15,
            position: 'absolute',
          },
        }}>
        <BottomTab.Screen
          name="Home"
          component={DashboardStackScreen}
          options={() => ({
            tabBarLabel: Languages.Home,
            tabBarIcon: ({color}) => (
              <TabBarIcon icon="home" tintColor={color} />
            ),
          })}
        />

        <BottomTab.Screen
          name="Orders"
          component={OrderStackScreen}
          options={() => ({
            tabBarLabel: Languages.Orders,
            tabBarIcon: ({color}) => (
              <TabBarIcon icon="box" tintColor={color} />
            ),
          })}
        />

        <BottomTab.Screen
          name="Favorite"
          component={FavoriteStackScreen}
          options={() => ({
            tabBarLabel: Languages.Favorite,
            tabBarIcon: ({color}) => (
              <TabBarIcon icon="heart" tintColor={color} />
            ),
          })}
        />

        <BottomTab.Screen
          name="MyCart"
          component={MyCartStackScreen}
          options={() => ({
            tabBarLabel: Languages.MyCart,
            tabBarIcon: ({color}) => (
              <TabBarIcon icon="shopping-cart" tintColor={color} />
            ),
          })}
        />
      </BottomTab.Navigator>
    </View>
  );
}

const AppStack = createStackNavigator();

class RootNavigator extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.switchLanguage(this.props.language);
  }

  render() {
    return (
      <NavigationContainer>
        <AppStack.Navigator headerMode="none" initialRouteName="App">
          <AppStack.Screen name="App" component={BottomTabStack} />
        </AppStack.Navigator>
      </NavigationContainer>
    );
  }
}

const mapStateToProps = ({language}) => {
  return {
    language: language.lang,
  };
};

const mapDispatchToProps = (dispatch) => {
  const {switchLanguage} = require('@redux');

  return {
    switchLanguage: (lang) => dispatch(switchLanguage(lang)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigator);
