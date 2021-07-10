'use strict';

import React, { Component } from 'react';

import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback
} from 'react-native';
import styles from './styles';
import { directToPage } from '../../utils/ext';

class CourseItem extends Component {
  render() {
  	const { data, navigation } = this.props;
    return (
      <TouchableWithoutFeedback onPress={() => directToPage(navigation, "detail", {
      	courseId: data.id
      })}>
	      <View style={styles.courseItem}>
	      	<View style={styles.imgView}>
	      		<Image style={styles.imgView} source={{uri: data.course_img}} />
	      	</View>
	      	<View>
	      		<Text numberOfLines={1} ellipsizeMode = 'tail'  style={styles.courseName}>{data.course_name}</Text>
	      	</View>	
	      	<View style={styles.teacherInfo}>
	      		<Image style={styles.teacherAvatar} source={{uri: data.teacher_img}} />
	      		<Text style={styles.teacherName}>{data.teacher_name}</Text>
	      	</View>
	      	<View>
	      		<Text style={styles.price}>￥{data.price}</Text>
	      	</View>	
	      </View>
	    </TouchableWithoutFeedback>
    );
  }
}



export default CourseItem;