import  React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

import CountDown from 'react-native-countdown-component';
import TimeSetContainer from "./timeSet.container";

class CountdownContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            workoutTime: this.props.workoutTime,
            restTime: this.props.restTime,
            timer: this.props.workoutTime,
            running: true,
            backgroundColor: 'green',
            hr: 0,
            min: 0,
            sec: 0
        }
    }

    resetTimer = () => {
        this.setState (
            {
                time: this.state.time
            }
        );
    };

    stopTimer = () => {
        this.setState (
            {
                running: false
            }
        );
    };

    toggleRest = () => {
        if (this.state.restTime != 0) {
            this.setState (
                {
                    timer: this.state.restTime,
                    backgroundColor: 'orange'
                }
            );
        } else {
            this.setState ({
                backgroundColor: 'red'
            })
        }
    };

    render() {
        return(
            <View style={styles.container, {backgroundColor: this.state.backgroundColor}}>
                <View style={styles.countdownContainer}>
                <CountDown
                    until={this.state.timer}
                    running={this.state.running}
                    onFinish={() => this.toggleRest()}
                    size={50}
                    digitStyle={{backgroundColor: null}}
                    digitTxtStyle={{color: '#fff'}}
                    timeToShow={['H', 'M', 'S']}
                    timeLabels={{h: null, m: null, s: null}}
                  />
                </View>
                <View style={styles.actionButtons}>
                    <Button
                      title="Reset"
                      onPress={() => this.resetTimer()}
                    />
                    <Button
                        title="Stop"
                        onPress={() => this.stopTimer()}
                    />
                </View>
            </View>
        );
    }


}

const styles = StyleSheet.create({
    countdownContainer: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        display: "flex",
        flexDirection: "row",
        minWidth: '100%',
        height: '90%',
        alignItems: 'center',
        paddingTop: 150,
        paddingBottom: 150,
        justifyContent: 'center',
    },

    actionButtons: {
        flex: 1,
        display: 'flex',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'flex-start',
    }


});

export default CountdownContainer;
