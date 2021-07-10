import React, { Component } from 'react';

import {
  StyleSheet,
  View,
  Text,
  Button,
  ScrollView,
  RefreshControl
} from 'react-native';
import IndexModel from '../modules/Index';
import IndexSwiper from '../components/Swiper/index';
import MainTitle from '../components/MainTitle/index'
import RecomCourse from '../components/recomCourseList/index';
import CourseList from '../components/courseList/index';
import MyRefreshControl from '../components/RefreshControl';


const Index = new IndexModel();
class Home extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      coursesData: [],
      filedsData: [],
      recomCoursesData: [],
      swipers: [],
      refreshing: true
    }
  }
  componentDidMount() {
    this.getCourseDatas();
  }

  getCourseDatas = () => {
    Index.getCourseDatas().then(res => {
      const { courses, fields, recomCourses, swipers } = res.result;
      setTimeout(() => {
        this.setState({
          coursesData: courses,
          filedsData: fields,
          recomCoursesData: recomCourses,
          swipers: swipers
        }, () => {
          if(this.state.refreshing) {
            this.setState({
              refreshing: false
            })
          }
        })
      }, 1000)
    })
  }
  onPageRefresh = () => {
    if(this.state.refreshing) {
      return;
    }
    this.setState({
      refreshing: true
    })
    this.getCourseDatas();
  }
  render() {
    const { navigation } = this.props,
          { swipers, coursesData, filedsData, recomCoursesData, refreshing } = this.state;
    return (
      <ScrollView showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={this.onPageRefresh} />}
      >
      	<IndexSwiper swipers={swipers} navigation={navigation} />
        <MainTitle title="推荐课程" />
        <RecomCourse data={recomCoursesData} navigation={navigation} />
        {filedsData.length > 0 && <MainTitle title={filedsData[0].field_name} />}
        <CourseList data={coursesData} navigation={navigation} />
        {filedsData.length > 0 && <MainTitle title={filedsData[1].field_name} />}
        {filedsData.length > 0 && <MainTitle title={filedsData[2].field_name} />}
        {filedsData.length > 0 && <MainTitle title={filedsData[3].field_name} />}
      </ScrollView>	
    );
  }
}

export default Home;