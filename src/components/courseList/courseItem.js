'use strict';

import React, { Component } from 'react';

import {
  View,
  Text,
  TouchableWithoutFeedback
} from 'react-native';
import styles from './styles';
import { directToPage } from '../../utils/ext';
import AniImage from '../AniImage';
class CourseItem extends Component {

  render() {
    const { data, index, navigation } = this.props;
    return (
      <TouchableWithoutFeedback onPress={() => directToPage(navigation, 'detail', {courseId: data.id})}>
        <View style={[styles.courseItem, index === 0 && styles.firstCourseItem]}>
          <View style={styles.imgView}>
            <AniImage styles={styles.imgView} url={data.img} />
          </View>
          <View style={styles.description} >
            <Text style={styles.courseTitle} numberOfLines={2}>{data.course_name}</Text>
            <Text style={styles.price}>￥{data.price}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback> 
    );
  }
}



export default CourseItem;