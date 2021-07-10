'use strict';

import React, { Component } from 'react';

import {
  Text,
  View,
  TouchableWithoutFeedback
} from 'react-native';
import styles from './styles';

class ListItem extends Component {
  render() {
  	const { data, curField, tabClick } = this.props;
    return (
    	<TouchableWithoutFeedback onPress={() => tabClick(data.field)}>
    		<View style={[styles.tabItem, curField === data.field && styles.currentTabItem]}>
    			<Text style={[styles.tabItemText, curField === data.field && styles.currentTabText]}>{data.field_name}</Text>
      	</View>
    	</TouchableWithoutFeedback>
    );
  }
}


export default ListItem;