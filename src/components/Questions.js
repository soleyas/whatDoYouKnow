import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { getQuestions } from '../actions/questionActions';
import { setWinner } from '../actions/playerAction';
import Question from './Question';
import ScoreBoard from './ScoreBoard';
import colors from '../../colors';

class Questions extends Component {
  constructor(props) {
    super(props);

    this.checkForWinner = this.checkForWinner.bind(this);
  }
  componentDidMount() {
    const { getQuestions, players, category } = this.props;
    getQuestions(players.length * 1, category.id);
  }

  checkForWinner() {
    const { questions, players, showWinnerScreen, setWinner } = this.props;
    if (questions.length === 0) {
      const maxScore = players.reduce(
        (max, curr) => (max < curr.score ? curr.score : max),
        players[0].score
      );
      const winners = players.filter(value => value.score === maxScore);
      setWinner(winners);
      showWinnerScreen();
    }
  }

  render() {
    const { gotQuestions } = this.props;
    console.log(this.props.questions);
    return (
      <View style={styles.container}>
        {gotQuestions ? (
          <Question checkForWinner={this.checkForWinner} />
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

const mapStateToProps = ({ questions, players, categories }) => {
  return { ...questions, ...players, ...categories };
};

const mapDispatchToProps = dispatch => {
  return {
    getQuestions: amount => {
      dispatch(getQuestions(amount));
    },
    setWinner: winners => {
      dispatch(setWinner(winners));
    },
    getQuestions: (amount, cat) => {
      dispatch(getQuestions(amount, cat));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions);
