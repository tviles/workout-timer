import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import TimeSetContainer from "./components/timeSet.container";

export default function App() {
  return (
    <View style={styles.container}>
        <TimeSetContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    height: '100%'
  },
});
