import React from "react";
import { StyleSheet, Text, View } from "react-native"

export default class Label extends React.Component {
    render() {
        return(
            <View style={styles.label}>
                <Text style={styles.labelText}>AKA 21s</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    label: {
        color: "#1D1135",
        backgroundColor: "#CB84FF",
        width: 100,
        borderRadius: 5,
        paddingVertical: 8,
        marginLeft: 250,
        marginTop: 200,
        position: "absolute",
        transform: [
            {
                rotate: "-10deg"
            }
        ]
    },
    labelText: {
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "500"
    }
});