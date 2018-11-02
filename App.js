//react
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

//redux
import { Provider } from 'react-redux';
import reducers from './src/reducers';

//components
import Welcome from './src/components/Welcome';
import ChoosePlayer from './src/components/ChoosePlayer';

export default class App extends Component {
  render() {
    return (
      <Provider store={reducers}>
        <View style={styles.container}>
          <ChoosePlayer />
        </View>
      </Provider>
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
