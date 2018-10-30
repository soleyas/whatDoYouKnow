import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Do you want to have some fun?</Text>
        <TouchableOpacity>
          <Text>YES</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Welcome;
