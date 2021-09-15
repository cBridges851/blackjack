import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import Header from "../Header";
import TextContainer from "../TextContainer";
import PrimaryButton from "../PrimaryButton";

export default class Rules extends React.Component {
    render() {
        return(
            <ScrollView>
                <View style={styles.container}>
                    <Header labelText="Rules!"></Header>
                    <TextContainer style={styles.textContainer}>
                        <Text style={styles.rulesHeadings}>Objective of the game</Text>
                        <Text style={styles.rulesText}>
                            Get a count of 21 or higher than the dealer through a combination of cards to win.
                        </Text>
                        <Text style={styles.rulesHeadings}>Hit</Text>
                        <Text style={styles.rulesText}>
                            Pressing "Hit" will give a new card and the value of the card will be added to your other cards.
                        </Text>
                        <Text style={styles.rulesHeadings}>Stay</Text>
                        <Text style={styles.rulesText}>
                            Pressing "Stay" will keep your current set of cards, and the dealer will move next.
                        </Text>
                        <Text style={styles.rulesHeadings}>Card Values</Text>
                        <Text style={styles.rulesText}>
                            Cards from 1 - 10 are worth as they say. Face cards (J, Q, K) are 10 points. Ace cards can be either 1 or 11 points.
                        </Text>
                        <Text style={styles.rulesHeadings}>Hiscores</Text>
                        <Text style={styles.rulesText}>
                            The hiscore is the total win streak of a match after losing to the dealer. If the win streak is higher than the previous hiscore then it will replace that hiscore.
                        </Text>
                    </TextContainer>
                    <View style={styles.rulesButtonContainer}>
                        <PrimaryButton buttonName="BACK" onPress={() => this.props.navigation.navigate("Home")}/>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
		flex: 1,
		backgroundColor: "#1D1135"
	},
    rulesButtonContainer: {
        marginTop: 50,
        alignSelf: "center"
    },
    rulesHeadings: {
        color: "#D6D4DA",
        fontSize: 23,
        fontWeight: "600"
    },
    rulesText: {
        color: "#BEBEBE",
        marginBottom: 10
    }
});