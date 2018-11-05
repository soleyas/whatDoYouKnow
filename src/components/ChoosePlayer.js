import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";
import ChoosePlayerBox from "./ChoosePlayerBox";
import PlayerContainer from "./PlayerContainer";
import colors from "../../colors";

class ChoosePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { players } = this.props;
    const { startGame } = this.props;
    return (
      <View style={styles.everything}>
        <View style={styles.container}>
          <Text style={styles.header}>Add Players</Text>
          <ChoosePlayerBox />
          {players.map((value, key) => (
            <PlayerContainer name={value} key={key} />
          ))}
        </View>
        <TouchableOpacity style={styles.button} onPress={() => startGame()}>
          <Text style={styles.textInButton}>Start Game</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  everything: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.lightBlue
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: 50,
    margin: 10
  },
  header: {
    fontSize: 28,
    margin: 15
  },
  button: {
    backgroundColor: colors.mediumBlue,
    paddingBottom: 12,
    paddingTop: 12,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 8,
    margin: 20,
    justifyContent: "space-between",
    marginBottom: 35,
    alignItems: "center",
    width: "50%",
    borderColor: colors.seaBlue
  },
  textInButton: {
    fontSize: 20,
    color: "#FFF"
  }
});

const mapStateToProps = ({ players }) => {
  return { ...players };
};

export default connect(
  mapStateToProps,
  {}
)(ChoosePlayer);
