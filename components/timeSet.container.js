import  React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Button } from 'react-native';

import CountdownContainer from "./countdown.container";
import Spinner from 'react-native-number-spinner';

class TimeSetContainer extends Component {

    constructor(props) {
        super(props);

        this.state = {
            show: true,
            timeInSeconds: 0,
            hr: 0,
            min: 0,
            sec: 0
        }
    }

    calculateTotalSeconds = (hr, min, sec) => {
        return hr + min + sec;
    };

    handleTimeSet = (value, increment) => {
        if (increment == 'hour') {
            this.state.hr = value*3600
        } else if (increment == 'minute') {
            this.state.min = value*60
        } else if (increment == 'second') {
            this.state.sec = value
        }

        this.state.timeInSeconds = this.calculateTotalSeconds(this.state.hr, this.state.min, this.state.sec)

        alert(this.state.timeInSeconds)
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
                    <View style={styles.timeSetContainer}>
                    <Text>Hour:</Text>
                    <Spinner
                        max={10}
                        min={2}
                        default={5}
                        color="#f60"
                        numColor="#f60"
                        onNumChange={(hr)=>{this.handleTimeSet(hr, 'hour')}}
                     />
                     <Text>Minute:</Text>
                     <Spinner
                         max={10}
                         min={2}
                         default={5}
                         color="#f60"
                         numColor="#f60"
                         onNumChange={(m)=>{this.handleTimeSet(m, 'minute')}}
                      />
                      <Text>Secont:</Text>
                      <Spinner
                          max={10}
                          min={2}
                          default={5}
                          color="#f60"
                          numColor="#f60"
                          onNumChange={(s)=>{this.handleTimeSet(s, 'second')}}
                       />
                       <Button
             title="Press me"
             onPress={() => this.ShowHideComponent()}
           />
                    </View>
                ) : null }

                {!this.state.show ? (
                    <CountdownContainer time={this.state.timeInSeconds} />
                ) : null }
            </View>
        );
    }


}

const styles = StyleSheet.create({
    timeSetContainer: {
        backgroundColor: 'white',
        marginBottom: 30,
        display: "flex",
        flexDirection: "row",
        minWidth: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default TimeSetContainer;
