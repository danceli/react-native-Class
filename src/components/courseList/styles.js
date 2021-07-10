'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
} from 'react-native';
import { screenSize } from '../../utils/common';

const styles = StyleSheet.create({
	courseItem: {
		flexDirection: "row",
		marginTop: 10
	},
	firstCourseItem: {
		marginTop: 0
	},
	imgView: {
		width: screenSize.width / 3,
		height: 80
	},
	description: {
		backgroundColor: "#fff",
		width: screenSize.width / 3 * 2,
		height: 80,
		paddingLeft: 10,
		justifyContent: "space-around"
	},
	price: {
		color: "orange"
	}
});


export default styles;