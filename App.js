import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import Welcome from "./src/components/Welcome";
import ChoosePlayerBox from "./src/components/ChoosePlayerBox";
import ChoosePlayer from "./src/components/ChoosePlayer";

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
      <View style={styles.container}>
        {this.state.pressYes ? (
          <ChoosePlayer />
        ) : (
          <Welcome changeYes={this.changeYes} />
        )}
      </View>
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
