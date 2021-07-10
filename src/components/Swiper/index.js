'use strict';

import React, { Component } from 'react';

import {
  View,
  Text
} from 'react-native';
import SwiperItem from './swiperItem';
import styles from './styles';
import Swiper from 'react-native-swiper';

class IndexSwiper extends Component {
  render() {
  	const { navigation, swipers } = this.props,
  				swiperHeight = styles.swiperSize.height;
    return (
      <View height={swiperHeight}>
      	<Swiper key={swipers.length} height={swiperHeight} autoplay={true} loop={true} activeDotColor="#fff">
      		{
      			swipers.map(item => (
      				<SwiperItem data={item} key={item.id} navigation={navigation}/>
      			))
      		}
      	</Swiper>
      </View>
    );
  }
}



export default IndexSwiper;