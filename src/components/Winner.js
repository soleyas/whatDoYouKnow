import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class Winner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    console.log(this.props);
    return (
      <View>
        {this.props.winners.map((value, key) => (
          <Text key={key}>{value}</Text>
        ))}
      </View>
    );
  }
}

const mapStateToProps = ({ players }) => {
  return { ...players };
};

export default connect(
  mapStateToProps,
  {}
)(Winner);
