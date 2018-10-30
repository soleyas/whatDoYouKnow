import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import Welcome from './src/components/Welcome';
import ChoosePlayerBox from './src/components/ChoosePlayerBox';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ChoosePlayerBox />;
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
});
