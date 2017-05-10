import React, { Component,  } from "react";
import { RefreshControl, 
         ScrollView, 
         View, 
         Text, 
         TextProperties,
         StyleSheet, 
         ViewStyle, 
         TextStyle, 
         ActivityIndicator } from "react-native";
import { Countdown } from "./countdown"
import { HolidayApi } from './HolidayApi'
import moment from "moment"

let config = require('../config.json')

interface Props {

}

class ViewData {
    constructor(public readonly holidayName: string, 
                public readonly date: moment.Moment) {
    }

} 

interface State {
    refreshing: boolean
    model?: ViewData
}

export default class App extends Component<Props, State> {
    
    constructor() {
        super()

        this.state = {
            refreshing: false
        }
    }

    async componentWillMount() {
        await this.refresh()
    }

    async refresh() {
        const api = new HolidayApi(config.key)

        const holidays = await api.fromNow("US")

        const date = moment(holidays[0].date)

        this.setState({
            refreshing: false,
            model: new ViewData(holidays[0].name, date)
        })
    }

    render() {
        return (
            <ScrollView style={styles.scroll} 
                contentContainerStyle={{flexGrow: 1}}
                refreshControl={
                    <RefreshControl 
                        refreshing={this.state.refreshing}
                        onRefresh={this.refresh.bind(this)} />
                }>
                {!this.state.model || this.state.refreshing ||
                    <View style={styles.container}>
                        <Countdown toMoment={this.state.model.date} />
                        <Text>until</Text>
                        <Text>
                            {this.state.model.holidayName}
                        </Text>
                        <Text>
                            {this.state.model.date.format("LL")}
                        </Text>
                    </View>
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    scroll: {
        flex: 1,
        backgroundColor: "#F5FCFF",
    } as ViewStyle,

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF",
        height: "100%"
    } as ViewStyle
    
});
