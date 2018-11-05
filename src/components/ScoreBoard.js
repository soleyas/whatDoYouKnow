import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { connect } from "react-redux";

class ScoreBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { players } = this.props;
    console.log("All players in game: ", players);
    return (
      <View style={styles.board}>
        {players.map((player, key) => (
          <View key={key}>
            <Text>{player.name}</Text>
            <Text>{player.score}</Text>
          </View>
        ))}
      </View>
    );
  }
}

const mapStateToProps = ({ players }) => {
  return { players: players };
};

const styles = StyleSheet.create({
  board: {
    flexDirection: "row",
    justifyContent: "space-between"
  }
});

export default connect(
  mapStateToProps,
  {}
)(ScoreBoard);
