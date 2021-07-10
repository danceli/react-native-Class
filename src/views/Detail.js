import React, { Component } from 'react';

import { WebView } from 'react-native-webview';
class Detail extends Component {
  render() {
    const { navigation, route } = this.props,
          { params } = route;
    return (
      <WebView
        source={{uri: "https://ke.qq.com/course/" + params.courseId}}
      />
    );
  }
}


export default Detail;