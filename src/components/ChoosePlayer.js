import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import ChoosePlayerBox from './ChoosePlayerBox';
import { getQuestions } from '../actions/questionActions';
class ChoosePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    getQuestions(10, 'sammi');
    return (
      <View>
        <ChoosePlayerBox />
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
