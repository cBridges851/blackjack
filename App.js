import React from "react";
import Home from "./src/components/home-screen/Home.js";
import { StyleSheet, View } from "react-native";

export default class App extends React.Component {
	render() {
		return (
			<View style={styles.container}>
				<Home></Home>
			</View>
		)
	}
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#1D1135"
	}
});