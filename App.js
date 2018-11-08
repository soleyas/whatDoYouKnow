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
import Winner from './src/components/Winner';
const store = configureStore();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcome: true,
      choosePlayer: false,
      questions: false,
      winner: false
    };
  }

  changeYes = () => {
    this.setState({
      welcome: false,
      choosePlayer: true,
      questions: false,
      winner: false
    });
  };

  startGame = () => {
    this.setState({
      welcome: false,
      choosePlayer: false,
      questions: true,
      winner: false
    });
  };
  showWinnerScreen = () => {
    this.setState({
      welcome: false,
      choosePlayer: false,
      questions: false,
      winner: true
    });
  };

  render() {
    const { welcome, choosePlayer, questions, winner } = this.state;
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {welcome && <Welcome changeYes={this.changeYes} />}
          {choosePlayer && <ChoosePlayer startGame={this.startGame} />}
          {questions && <Questions showWinnerScreen={this.showWinnerScreen} />}
          {winner && <Winner />}
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
