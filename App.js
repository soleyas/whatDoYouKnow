//react
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

//redux
import { Provider } from "react-redux";
import configureStore from "./src/reducers/configureStore";

//components
import Welcome from "./src/components/Welcome";
import ChoosePlayer from "./src/components/ChoosePlayer";
import Questions from "./src/components/Questions";

const store = configureStore();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      welcome: true,
      choosePlayer: false,
      questions: false
    };
  }

  changeYes = () => {
    this.setState({ welcome: false, choosePlayer: true, questions: false });
  };

  startGame = () => {
    this.setState({ welcome: false, choosePlayer: false, questions: true });
  };

  render() {
    const { welcome, choosePlayer, questions } = this.state;
    return (
      <Provider store={store}>
        <View style={styles.container}>
          {welcome && <Welcome changeYes={this.changeYes} />}
          {choosePlayer && <ChoosePlayer startGame={this.startGame} />}
          {questions && <Questions />}
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center"
  }
});
