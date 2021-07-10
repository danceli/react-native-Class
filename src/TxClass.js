import 'react-native-gesture-handler';
import React, { useEffect } from "react";
import {
	View,
	Text,
} from 'react-native'


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from './views/Home';
import Detail from './views/Detail';
import List from './views/List';
import Logo from './components/Logo/index';
import IndexModel from './modules/Index';


const BottomTab = () => {
	const Tab = createBottomTabNavigator();
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused, color, size }) => {
					let iconName;
					switch(route.name) {
						case "首页":
							iconName = "ios-home";
							break;
						case "列表":
							iconName = "ios-list";
							break;
					}
					return (
						<Icon name={iconName} size={size} color={color} />
					)
				}
			})}
			tabBarOptions={{
				activeTintColor: "#23b8ff",
				inactiveTintColor: "#999"
			}}
		>
			<Tab.Screen name="首页" component={Home}></Tab.Screen>
			<Tab.Screen name="列表" component={List}></Tab.Screen>
		</Tab.Navigator>
	)
}


const Stack = createStackNavigator();

const Index = new IndexModel();

function TxClass() {
	return (	
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen 
					name="home"
					component={BottomTab} 
					options={{headerTitleAlign: "center", headerTitle: props => <Logo {...props} />, headerStyle: {
						backgroundColor: "pink",
					}}}
				></Stack.Screen>
				<Stack.Screen name="detail" component={Detail} options={{headerTitle: props => <Logo {...props} />, headerBackTitle: "返回"}}></Stack.Screen>
			</Stack.Navigator>
		</NavigationContainer>
	)
}

export default TxClass;