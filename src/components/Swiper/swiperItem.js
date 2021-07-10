'use strict';

import React, { Component } from 'react';

import {
  TouchableWithoutFeedback 
} from 'react-native';
import { directToPage } from '../../utils/ext';
import AniImage from '../AniImage/'
import styles from './styles';
class swiperItem extends Component {
	constructor(...args) {
		super(...args)
	}
	dirToDetail = () => {
		directToPage(this.props.navigation, "detail", {
			courseId: this.props.data.course_id
		})
	}
  render() {
  	const { data, navigation } = this.props;
    return (
      <TouchableWithoutFeedback style={styles.swiperSize} onPress={this.dirToDetail}>
      	<AniImage styles={styles.swiperSize} url={data.img} />
      </TouchableWithoutFeedback>
    );
  }
}



export default swiperItem;