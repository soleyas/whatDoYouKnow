import React, { Component } from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";

class ChoosePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View>
        <Text> textInComponent </Text>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(
  mapStateToProps,
  {}
)(ChoosePlayer);
