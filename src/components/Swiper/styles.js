'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
} from 'react-native';
import { screenSize } from '../../utils/common';


const styles = StyleSheet.create({
	swiperSize: {
		width: screenSize.width,
		height: screenSize.width * 360 / 1200
	},
	pagination: 5
});


export default styles;