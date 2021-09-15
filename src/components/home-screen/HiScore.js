import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class HiScore extends React.Component {
    render() {
        return(
            <View style={styles.hiscore}>
                <Text style={styles.hiscoreText}>HISCORE</Text>
                <Text style={styles.hiscoreText}>0</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    hiscore: {
        backgroundColor: "#241542",
        width: 300,
        borderRadius: 15,
        paddingVertical: 5,
        height: 150,
        justifyContent: 'center',
        alignSelf:"center",
        marginTop: 100
    },
    hiscoreText: {
        color: "#EFEFEF",
        fontSize: 40,
        textAlign: "center",
        fontWeight: "500"
    }
});