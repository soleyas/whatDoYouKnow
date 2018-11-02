//react
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

//redux
import { Provider } from 'react-redux';
import configureStore from './src/reducers/configureStore';

//components
import Welcome from './src/components/Welcome';
import ChoosePlayer from './src/components/ChoosePlayer';
import Questions from './src/components/Questions';

const store = configureStore();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pressYes: false
    };
  }

  changeYes = () => {
    this.setState({ pressYes: !this.state.pressYes });
  };

  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Questions />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
});
