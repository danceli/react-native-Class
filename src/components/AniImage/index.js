'use strict';

import React, { Component } from 'react';

import {
  Animated,
  Image
} from 'react-native';

class AnimateImage extends Component {
  render() {
  	const { url, styles } = this.props;
  	this.animatedValue = new Animated.Value(0);
  	const imgAnimation = this.animatedValue.interpolate({
  		inputRange: [0, 100],
  		outputRange: [0, 1]
  	})
    return (
      <Animated.Image 
      	source={{ uri: url }}
      	style={[styles, {opacity: imgAnimation}]}
      	onLoadEnd={() => {
      		Animated.timing(this.animatedValue, {
      			toValue: 100,
      			duration: 500
      		}).start()
      	}}
      />
    );
  }
}


export default AnimateImage;