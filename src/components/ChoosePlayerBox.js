import React, { Component } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text
} from "react-native";
import { Icon } from "react-native-elements";
import { connect } from "react-redux";
import { addPlayer } from "../actions/playerAction";

class ChoosePlayerBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      inputName: ""
    };

    this.addingPlayer = this.addingPlayer.bind(this);
  }

  addingPlayer = inputName => {
    const { players } = this.props;
    const { addPlayer } = this.props;
    if (players.length === 5) {
      alert("The maximum amount of players is 5");
      this.setState({ inputName: "" });
    } else if (inputName !== "") {
      addPlayer(inputName);
      this.setState({ inputName: "" });
    }
  };

  render() {
    const { inputName } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.addingPlayer(inputName)}>
          <Icon name="add" type="materialIcons" color="#4BB543" />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          placeholder={"Your name here..."}
          onChangeText={inputName => this.setState({ inputName })}
          value={inputName}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#D0D0D0",
    margin: 7
  },
  add: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    aspectRatio: 1,
    backgroundColor: "white"
  },
  textInput: {
    flex: 4,
    borderBottomWidth: 1,
    marginLeft: 5,
    fontSize: 15
  }
});

const mapStateToProps = ({ players }) => {
  return { players: players };
};

export default connect(
  mapStateToProps,
  { addPlayer }
)(ChoosePlayerBox);
