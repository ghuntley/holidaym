import React, { Component,  } from "react";
import { Text, StyleSheet, TextStyle } from "react-native";
import moment from "moment";

interface Props {
    toMoment: moment.Moment
}

interface State {

}

export class Countdown extends Component<Props, State> {
    private _timer: number = 0

    private pad(n: string, width: number, z: string = '0') {
        n = n + '';
        return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
    }

    timeLeft(): string {
        const pad = this.pad.bind(this)
        const now = moment().valueOf()
        const prev = this.props.toMoment.valueOf()
        const totalSec = prev - now
        const second = 1000
        const minute = 60 * second
        const hour = 60 * minute
        const day = 24 * hour
        const h = Math.trunc(totalSec/hour)
        const m = Math.trunc(totalSec%hour/minute) 
        const s = Math.trunc(totalSec%hour%minute/second)
        const millis = Math.trunc(totalSec%hour%minute%second)
        const time = `${pad(h, 2)}:${pad(m, 2)}:${pad(s, 2)}:${pad(millis, 3)}`
        if (totalSec > day) {
            return `${ Math.trunc(totalSec/day) } ${time}`
        } else {
            return time
        }
    }

    componentWillMount() {
        this._timer = setInterval(this.refreshTimeLeft.bind(this), 1)
    }

    componentWillUnmount() {
        if (this._timer != 0) {
            clearTimeout(this._timer)
            this._timer = 0
        }
    }

    refreshTimeLeft() {
        this.forceUpdate()
    }

    render() {
        return <Text style={styles.countDownLabel}>{this.timeLeft()}</Text>
    }
}

const styles = StyleSheet.create({
    
    countDownLabel: {
        fontFamily: "Menlo",
        fontSize: 20,
        textAlign: "center"
    } as TextStyle

});
