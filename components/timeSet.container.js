import  React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

import CountdownContainer from "./countdown.container";
import Spinner from 'react-native-number-spinner';

class TimeSetContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show: true,
            woTimeInSeconds: 0,
            restTimeInSeconds: 0,
            woHR: 0,
            woMIN: 0,
            woSEC: 0,
            restHR: 0,
            restMIN: 0,
            restSEC: 0
        }
    }

    calculateTotalSeconds = (hr, min, sec) => {
        return hr + min + sec;
    };

    handleTimeSet = (value, increment, type) => {
        if (type == 'wo') {
            if (increment == 'hour') {
                this.state.woHR = value*3600
            } else if (increment == 'minute') {
                this.state.woMIN = value*60
            } else if (increment == 'second') {
                this.state.woSEC = value
            }
        } else if (type == 'rest') {
            if (increment == 'hour') {
                this.state.restHR = value*3600
            } else if (increment == 'minute') {
                this.state.restMIN = value*60
            } else if (increment == 'second') {
                this.state.restSEC = value
            }
        }

        this.state.woTimeInSeconds = this.calculateTotalSeconds(this.state.woHR, this.state.woMIN, this.state.woSEC)
        this.state.restTimeInSeconds = this.calculateTotalSeconds(this.state.restHR, this.state.restMIN, this.state.restSEC)
    };

    ShowHideComponent = () => {
        if (this.state.show == true) {
          this.setState({ show: false });
        } else {
          this.setState({ show: true });
        }
      };

    render() {
        return(
            <View style={styles.container}>
                {this.state.show ? (
                    <View>
                        <View style={styles.woTimeSetContainer}>
                            <Text>Hour:</Text>
                            <Spinner
                                max={10}
                                min={2}
                                default={5}
                                color="#f60"
                                numColor="#f60"
                                onNumChange={(hr)=>{this.handleTimeSet(hr, 'hour', 'wo')}}
                             />
                             <Text>Minute:</Text>
                             <Spinner
                                 max={10}
                                 min={2}
                                 default={5}
                                 color="#f60"
                                 numColor="#f60"
                                 onNumChange={(m)=>{this.handleTimeSet(m, 'minute', 'wo')}}
                              />
                              <Text>Secont:</Text>
                              <Spinner
                                  max={10}
                                  min={2}
                                  default={5}
                                  color="#f60"
                                  numColor="#f60"
                                  onNumChange={(s)=>{this.handleTimeSet(s, 'second', 'wo')}}
                               />
                               <Button
                                 title="Press me"
                                 onPress={() => this.ShowHideComponent()}
                               />
                        </View>

                        <View style={styles.restTimeSetContainer}>
                            <Text>Hour:</Text>
                            <Spinner
                                max={10}
                                min={2}
                                default={5}
                                color="#f60"
                                numColor="#f60"
                                onNumChange={(hr)=>{this.handleTimeSet(hr, 'hour', 'rest')}}
                             />
                             <Text>Minute:</Text>
                             <Spinner
                                 max={10}
                                 min={2}
                                 default={5}
                                 color="#f60"
                                 numColor="#f60"
                                 onNumChange={(m)=>{this.handleTimeSet(m, 'minute', 'rest')}}
                              />
                              <Text>Secont:</Text>
                              <Spinner
                                  max={10}
                                  min={2}
                                  default={5}
                                  color="#f60"
                                  numColor="#f60"
                                  onNumChange={(s)=>{this.handleTimeSet(s, 'second', 'rest')}}
                               />
                               <Button
                                 title="Press me"
                                 onPress={() => this.ShowHideComponent()}
                               />
                        </View>
                    </View>
                ) : null }

                {!this.state.show ? (
                    <CountdownContainer workoutTime={this.state.woTimeInSeconds} restTime={this.state.restTimeInSeconds} />
                ) : null }
            </View>
        );
    }


}

const styles = StyleSheet.create({
    woTimeSetContainer: {
        backgroundColor: 'green',
        display: "flex",
        flexDirection: "row",
        minWidth: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    restTimeSetContainer: {
        backgroundColor: 'orange',
        display: "flex",
        flexDirection: "row",
        minWidth: '100%',
        height: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default TimeSetContainer;
