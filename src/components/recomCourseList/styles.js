import React, { Component } from 'react';

import {
  StyleSheet,
} from 'react-native';
import { screenSize } from '../../utils/common';
// height: screenSize.width / 2 * 1080 / 1920,
const styles = StyleSheet.create({
	courseList: {
		flexDirection: "row",
		backgroundColor: "#fff",
		padding: 5,
	},
	courseItem: {
		width: screenSize.width / 2 - 5,
		padding: 5
	},
	imgView: {
		width: screenSize.width / 2 - 15,
		height: (screenSize.width / 2 - 20) * 1080 / 1920,
	},
	courseName: {
		fontSize: 17,
	},
	teacherInfo: {
		flexDirection: 'row',
		alignItems: "center",
		height: 40
	},
	teacherAvatar: {
		width: 30,
		height: 30,
		borderRadius: 150
	},
	teacherName: {
		color: "#aaa",
		marginLeft: 10
	},
	price: {
		color: "orange"
	}
});


export default styles;