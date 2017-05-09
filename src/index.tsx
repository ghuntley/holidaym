import React, { Component } from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle } from "react-native";

interface Props {

}

interface State {

}

export default class App extends Component<Props, State> {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.countDownLabel}>
                    0:00:00
                </Text>
                <Text>until</Text>
                <Text>
                    Independence Day
                </Text>
                <Text>
                    2 February 2019
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
    } as ViewStyle,

    countDownLabel: {
        fontSize: 20,
        textAlign: "center"
    } as TextStyle,

    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5,
    } as TextStyle,
});
