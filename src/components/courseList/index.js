'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  View,
} from 'react-native';
import CourseItem from './courseItem';

class CourseList extends Component {
  render() {
    const { data, navigation } = this.props;
    return (
      <View>
        {
          data.map((item, index) => (
            <CourseItem key={item.id} data={item} navigation={navigation} index={index} />
          ))
        }
      </View>
    );
  }
}



export default CourseList;