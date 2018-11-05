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
import { removePlayer } from "../actions/playerAction";

class PlayerContainer extends Component {
  render() {
    const { addPlayer, removePlayer, name } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.add} onPress={() => removePlayer(name)}>
          <Icon name="remove" type="materialIcons" color="#ff0000" />
        </TouchableOpacity>
        <Text style={styles.textInput}>{name.name}</Text>
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
    backgroundColor: "#E8E8E8",
    margin: 7
  },
  add: {
    justifyContent: "center",
    alignItems: "center"
  },
  textInput: {
    flex: 4,
    borderBottomWidth: 1,
    marginLeft: 7,
    fontSize: 18
  }
});

export default connect(
  null,
  { removePlayer }
)(PlayerContainer);
