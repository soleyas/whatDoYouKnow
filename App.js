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
import Categories from './src/components/Categories';
import Winner from './src/components/Winner';

const store = configureStore();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcome: true,
      choosePlayer: false,
      questions: false,
      winner: false,
      categories: false
    };
  }

  changeYes = () => {
    this.setState({
      welcome: false,
      choosePlayer: true,
      questions: false,
      winner: false,
      categories: false
    });
  };

  nextStep = () => {
    this.setState({
      welcome: false,
      choosePlayer: false,
      questions: false,
      categories: true
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
      winner: true,
      categories: false
    });
  };

  render() {
    const { welcome, choosePlayer, questions, winner, categories } = this.state;
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {welcome && <Welcome changeYes={this.changeYes} />}
          {winner && <Winner />}
          {choosePlayer && <ChoosePlayer nextStep={this.nextStep} />}
          {questions && <Questions showWinnerScreen={this.showWinnerScreen} />}
          {categories && <Categories startGame={this.startGame} />}
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
