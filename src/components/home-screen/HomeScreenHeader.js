import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class HomeScreenHeader extends React.Component {
    render() {
        return(
            <View>
                <Text style={styles.blackjack}>Blackjack</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 80
    },
    blackjack: {
        alignSelf: "center",
        color: "#EFEFEF",
        fontSize: 60,
        fontWeight: "500",
        marginTop: 120
    }
});