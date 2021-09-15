import React from "react";
import { Button, StyleSheet, Text, View } from "react-native"
import PrimaryButton from "../PrimaryButton";
import Header from "../Header";
import TextContainer from "../TextContainer";

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Header labelText="AKA 21s"></Header>
                <TextContainer>
                    <Text style={styles.hiscoreText}>HISCORE</Text>
                    <Text style={styles.hiscoreText}>0</Text>
                </TextContainer>
                <View style={styles.homeButtonsContainer}>
                    <PrimaryButton buttonName="PLAY"></PrimaryButton>
                    <PrimaryButton 
                        buttonName="RULES" 
                        onPress={() => this.props.navigation.navigate("Rules")}
                    />
                </View>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    container: {
		flex: 1,
		backgroundColor: "#1D1135"
	},
    homeButtonsContainer: {
        justifyContent: 'center',
        alignSelf:"center",
        marginTop: 50
    },
    hiscoreText: {
        color: "#EFEFEF",
        fontSize: 30,
        textAlign: "center",
        fontWeight: "500"
    }
});