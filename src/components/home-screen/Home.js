import React from "react";
import { Text, View } from "react-native"
import HiScore from "./HiScore";
import HomeScreenHeader from "./HomeScreenHeader";

export default class Home extends React.Component {
    render() {
        return (
            <View>
                <HomeScreenHeader></HomeScreenHeader>
                <HiScore></HiScore>
            </View>
        )
    }
} 

