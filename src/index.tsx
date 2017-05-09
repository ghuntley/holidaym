import React, { Component,  } from "react";
import { View, Text, StyleSheet, ViewStyle, TextStyle, ActivityIndicator } from "react-native";
import { HolidayApi } from './HolidayApi'
let config = require('../config.json')
import moment from "moment"

interface Props {

}

interface State {
    holidayName?: string
    date?: string
}

export default class App extends Component<Props, State> {

    constructor() {
        super()

        this.state = { }
    }

    async componentWillMount() {
        let api = new HolidayApi(config.key)

        let holidays = await api.fromNow("US")

        let date = moment(holidays[0].date)

        this.setState({
            holidayName: holidays[0].name,
            date: date.format("LL")
        })    
    }

    render() {
        var contents
        if (!this.state.holidayName) {
            contents = <ActivityIndicator />
        } else {
            contents = (
                <View style={styles.container}>
                    <Text style={styles.countDownLabel}>
                        0:00:00
                    </Text>
                    <Text>until</Text>
                    <Text>
                        {this.state.holidayName}
                    </Text>
                    <Text>
                        {this.state.date}
                    </Text>
                </View>
            )
        }
        return (
            <View style={styles.container}>
                { contents }
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
