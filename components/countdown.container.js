import  React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import CountDown from 'react-native-countdown-component';
import TimeSetContainer from "./timeSet.container";

class CountdownContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            hr: 0,
            min: 0,
            sec: 0
        }
    }

    handleTimeSet = () => {

    };

    render() {
        return(
            <View style={styles.container}>
                <View style={styles.countdownContainer}>
                <CountDown
                    until={this.props.time}
                    // onFinish={() => alert('finished')}
                    size={50}
                    digitStyle={{backgroundColor: null}}
                    digitTxtStyle={{color: '#fff'}}
                    timeToShow={['H', 'M', 'S']}
                    timeLabels={{h: null, m: null, s: null}}
                  />
                </View>

            </View>
        );
    }


}

const styles = StyleSheet.create({
    countdownContainer: {
        backgroundColor: 'green',
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        display: "flex",
        flexDirection: "row",
        minWidth: '100%',
        height: '50%',
        alignItems: 'center',
        paddingTop: 150,
        paddingBottom: 150,
        justifyContent: 'center',
    },

    numbersParent: {

    }


});

export default CountdownContainer;
