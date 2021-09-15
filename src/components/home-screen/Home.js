import React from "react";
import { Button, StyleSheet, Text, View } from "react-native"
import PrimaryButton from "../PrimaryButton";
import HiScore from "./HiScore";
import HomeScreenHeader from "./HomeScreenHeader";

export default class Home extends React.Component {
    render() {
        return (
            <View>
                <HomeScreenHeader></HomeScreenHeader>
                <HiScore></HiScore>
                <View style={styles.homeButtons}>
                    <PrimaryButton buttonName="PLAY"></PrimaryButton>
                    <PrimaryButton buttonName="RULES"></PrimaryButton>
                </View>
            </View>
        )
    }
} 

const styles = StyleSheet.create({
    homeButtons: {
        justifyContent: 'center',
        alignSelf:"center",
        marginTop: 50
    }
});