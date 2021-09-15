import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, View, ScrollView } from "react-native";
import Home from "./src/components/home-screen/Home.js"; 
import Rules from "./src/components/rules/Rules.js";

export default class App extends React.Component {
	render() {
		const Stack = createNativeStackNavigator();
		return (
			<NavigationContainer>
					<Stack.Navigator>
						<Stack.Screen
							name="Home"
							component={Home}
							options={{headerShown: false}}
						/>
						<Stack.Screen
							name="Rules"
							component={Rules}
							options={{headerShown: false}}
						/>
					</Stack.Navigator>
			</NavigationContainer>
		)
	}
};
