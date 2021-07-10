'use strict';

import React, { Component } from 'react';
import styles from './styles';

import {
  View,
  Text
} from 'react-native';

class MainTitle extends Component {
  render() {
  	const { title } = this.props;
    return (
      <View style={styles.mainTitle}>
      	<Text style={styles.title}>{ title }</Text>
      </View>
    );
  }
}


export default MainTitle;