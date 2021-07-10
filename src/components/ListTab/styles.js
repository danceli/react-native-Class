import React, { Component } from 'react';

import {
  StyleSheet,
} from 'react-native';



const styles = StyleSheet.create({
	tabContainer: {
		height: 40,
		backgroundColor: "#fff",
		borderBottomColor: "#eee",
		borderBottomWidth: 1
	},
	tabItem: {
		justifyContent: "center",
		alignItems: "center",
		height: 40,
		paddingLeft: 20,
		paddingRight: 20,
		borderBottomWidth: 2,
		borderBottomColor: "transparent" 
	},
	currentTabItem: {
		borderBottomColor: "#2faee3"
	},
	tabItemText: {
		fontSize: 16,
		color: "#222"
	},
	currentTabText: {
		color: "#2faee3"
	}
});


export default styles;