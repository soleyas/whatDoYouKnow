import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { getQuestions } from '../actions/questionActions';
import Question from './Question';
import ScoreBoard from './ScoreBoard';
import colors from '../../colors';

class Questions extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { getQuestions, players } = this.props;
    getQuestions(players.length * 20);
  }

  render() {
    const { gotQuestions, question } = this.props;
    return (
      <View style={styles.container}>
        {gotQuestions ? (
          <Question question={question} />
        ) : (
          <ActivityIndicator
            size="large"
            color={colors.seaBlue}
            style={styles.indicator}
          />
        )}
        <ScoreBoard />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.mediumBlue
  },
  indicator: {
    flex: 1,
    alignSelf: 'center'
  }
});

const mapStateToProps = ({ questions, players }) => {
  return { ...questions, ...players };
};

const mapDispatchToProps = dispatch => {
  return {
    getQuestions: amount => {
      dispatch(getQuestions(amount));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions);
