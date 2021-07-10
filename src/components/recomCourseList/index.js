'use strict';

import React, { Component } from 'react';

import {
  View,
} from 'react-native';
import CourseItem from './courseItem';
import styles from './styles';

class CourseList extends Component {
  render() {
  	const { data, navigation } = this.props;
    return (
      <View style={styles.courseList}>
      	{
      		data.map(item => (
      			<CourseItem key={item.id} data={item} navigation={navigation} />
      		))
      	}
      </View>
    );
  }
}


export default CourseList;