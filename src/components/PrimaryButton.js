import React from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default class PrimaryButton extends React.Component {
    render() {
        return(
            <View>
                <TouchableOpacity style={styles.primaryButton}>
                    <Text style={styles.primaryButtonText}>
                        {this.props.buttonName}
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    primaryButton: {
        backgroundColor: "#CB84FF",
        width: 300,
        borderRadius: 7,
        marginBottom: 20,
        height: 50,
        justifyContent: "center"
    },
    primaryButtonText: {
        fontSize: 30,
        fontWeight: "500",
        textAlign: "center"
    }
});