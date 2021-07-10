import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  RefreshControl
} from 'react-native';
// import MyRefreshControl from '../components/RefreshControl';

import ListModel from '../modules/List';
import ListTab from '../components/ListTab/index';
import CourseList from '../components/courseList/index';
import Loading from '../components/Loading';

const List = new ListModel();
class ListPage extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      fieldData: [],
      curField: "all",
      courseData: {},
      refreshing: false,
      pageLoading: false
    }
  }
  componentDidMount() {
    this.getCourseFields();
    this.getCourses(this.state.curField)
  }

  getCourseFields() {
    List.getCourseFields().then(res => {
      this.setState({
        fieldData: [{field: "all", field_name: "全部课程"}].concat(res.result)
      })
    }).catch(err => {
      console.log(err)
    })
  }
  getCourses = (field) => {
    this.setState({
      pageLoading: true
    })
    List.getCourse(field).then(res => {
      this.state.courseData[field] = res.result;
      setTimeout(() => {
        this.setState({
          courseData: this.state.courseData,
          pageLoading: false
        })
      }, 1000)
    }).catch(err => {
      console.log(err)
    })
  }
  tabClick = (field) => {
    this.setState({
      curField: field,
    }, () => {
      const { curField, courseData } = this.state;
      !courseData[curField] && this.getCourses(curField)
    });
  }
  onRefresh = () => {
    if(this.state.refreshing) {
      return;
    }
    this.setState({
      refreshing: true
    })

    this.getCourses(this.state.curField);
    this.setState({
      refreshing: false
    })
  }
  render() {
    const { navigation } = this.props;
    const { fieldData, curField, courseData, refreshing, pageLoading } = this.state;
    return (
      <View>
      	<ListTab fieldData={fieldData} curField={curField} tabClick={this.tabClick}/>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{marginBottom: 40}}
          refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.onRefresh} />}
        >
          {
            pageLoading === true ? <Loading /> : 
              <CourseList data={courseData[curField] || []} navigation={navigation} />
          }
        </ScrollView>
      </View>	
    );
  }
}


export default ListPage;