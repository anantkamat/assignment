import React, {Component} from 'react';
import {View, Image, FlatList, ScrollView} from 'react-native';
import {connect} from 'react-redux';

import {
  Header,
  RobotoBoldTextView,
  SquareSearchBar,
  AlertBox,
  CarouselComp,
  RoundedItem,
} from '@components';
import styles from './style';
import {Languages} from '@common';
import {
  Banner,
  Cleaning,
  EdibleOils,
  Fish,
  Fruits,
  Grocery,
  Meat,
  Spice,
  Vegetables,
} from '@images';

export class DashboardScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: [1, 2, 3, 4],
      activeIndex: 0,
    };

    this.renderCarousel = this.renderCarousel.bind(this);
  }

  onPressNotif = () => {
    let lang = this.props.language === 'en' ? 'ar' : 'en';
    this.props.switchLanguage(lang);
  };

  renderItem = (item) => {
    return <RoundedItem item={item} />;
  };

  renderCarousel() {
    return (
      <View>
        <Image source={Banner} style={styles.carouselItem} />
      </View>
    );
  }

  render() {
    const list = [
      {
        name: Languages.Vegetables,
        image: Vegetables,
      },
      {
        name: Languages.Fruits,
        image: Fruits,
      },
      {
        name: Languages.Cleaning,
        image: Cleaning,
      },
      {
        name: Languages.Grocery,
        image: Grocery,
      },
      {
        name: Languages.EdibleOils,
        image: EdibleOils,
      },
      {
        name: Languages.Meat,
        image: Meat,
      },
      {
        name: Languages.Fish,
        image: Fish,
      },
      {
        name: Languages.Spice,
        image: Spice,
      },
    ];

    return (
      <View style={styles.container}>
        <Header onPressNotif={this.onPressNotif} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={styles.scrollContainer}>
          <RobotoBoldTextView style={styles.secondaryText}>
            {Languages.FindYourDailyGoods}
          </RobotoBoldTextView>

          <View style={styles.searchSec}>
            <SquareSearchBar
              onChangeText={() => {}}
              onPressFilter={() => {}}
              placeholder={Languages.SearchHere}
            />
          </View>

          <AlertBox
            alertTitle={Languages.CompleteYourProfile}
            alertMessage={Languages.alertMessage}
            onPressAlert={() => {}}
          />
          <View style={styles.carouselSec}>
            <CarouselComp
              renderItem={this.renderCarousel}
              entries={this.state.entries}
              activeIndex={this.state.activeIndex}
              setActiveIndex={(activeIndex) => this.setState({activeIndex})}
            />
          </View>

          <FlatList
            contentContainerStyle={styles.scrollView}
            numColumns={4}
            data={list}
            keyExtractor={(item, index) => `${item?.name}-${index}`}
            renderItem={({item}) => this.renderItem(item)}
            ItemSeparatorComponent={() => <View style={styles.separator} />}
          />
        </ScrollView>
      </View>
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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);
