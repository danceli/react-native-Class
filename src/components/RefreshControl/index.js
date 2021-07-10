'use strict';

import React, { Component } from 'react';

import {
	RefreshControl
} from 'react-native';

class MyRefreshControl extends Component {
  render() {
  	const { refreshing, onRefresh } = this.props;
    return (
      <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
    );
  }
}



export default MyRefreshControl;