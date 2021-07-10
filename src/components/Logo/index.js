
import React, { Component } from 'react';
import styles from './styles';
import {
  View,
  Image
} from 'react-native';

class Logo extends Component {
  render() {
    return (
     	<Image
     	  style={styles.logo}
     	  source={require('../../assets/logo.png')}
     	/>
     	
    );
  }
}



export default Logo;