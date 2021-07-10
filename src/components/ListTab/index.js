'use strict';

import React, { Component } from 'react';

import {
  View,
  ScrollView,
  Text
} from 'react-native';
import styles from './styles';
import ListItem from './ListItem';

class ListTab extends Component {
  render() {
  	const { fieldData, curField, tabClick } = this.props;
    return (
      <View style={styles.tabContainer}>
      	<ScrollView
      		showsHorizontalScrollIndicator={false}
      		horizontal={true}
      	>	
      	{
      		fieldData.map((item, index) => (
      			<ListItem data={item} key={index} tabClick={tabClick} curField={curField}/>
      		))
      	}
      	</ScrollView>
      </View>
    );
  }
}



export default ListTab;