import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class TextContainer extends React.Component {
    render() {
        let elements = React.Children.toArray(this.props.children)

        if (elements.length === 1) {
            elements = React.cloneElement(elements[0], { className: 'top bottom' })
        }
        else if (elements.length > 0) {
            let lastElement = elements[elements.length - 1]
            elements =
            [React.cloneElement(elements[0], { className: 'top' })]
                .concat(elements.slice(1, -1))
                .concat(React.cloneElement(lastElement, { className: 'bottom' }))
        }

        return(
            <View style={styles.textContainer}>
                {elements}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textContainer: {
        backgroundColor: "#241542",
        width: 350,
        borderRadius: 15,
        paddingVertical: 10,
        paddingHorizontal: 10,
        // height: 130,
        justifyContent: 'center',
        alignSelf:"center",
        marginTop: 100
    },
    
});