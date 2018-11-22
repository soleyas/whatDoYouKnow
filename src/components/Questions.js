import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';
import { connect } from 'react-redux';
import { getQuestions } from '../actions/questionActions';
import { setWinner, resetScore } from '../actions/playerAction';
import Question from './Question';
import ScoreBoard from './ScoreBoard';
import colors from '../../colors';

class Questions extends Component {
  constructor(props) {
    super(props);

    this.checkForWinner = this.checkForWinner.bind(this);
  }
  componentDidMount() {
    const { getQuestions, players, category, resetScore } = this.props;
    getQuestions(players.length * 5, category.id);
    resetScore();
  }

  checkForWinner() {
    const { questions, players, setWinner } = this.props;
    if (questions.length === 0) {
      const maxScore = players.reduce(
        (max, curr) => (max < curr.score ? curr.score : max),
        players[0].score
      );
      const winners = players.filter(value => value.score === maxScore);
      setWinner(winners);
      this.props.navigation.navigate('Winner', winners);
    }
  }

  render() {
    const { gotQuestions, gotQuestionsError } = this.props;
    return (
      <View style={styles.container}>
        {gotQuestions ? (
          <Question checkForWinner={this.checkForWinner} />
        ) : gotQuestionsError ? (
          <View style={styles.indicator}>
            <Text style={{ color: 'white' }}>Error fetching Questions</Text>
          </View>
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
    alignItems: 'center',
    justifyContent: 'center',
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
    },
    resetScore: () => {
      dispatch(resetScore());
    }
  };
};

Questions.propTypes = {
  getQuestions: PropTypes.func,
  players: PropTypes.array,
  category: PropTypes.object,
  resetScore: PropTypes.func,
  questions: PropTypes.array,
  setWinner: PropTypes.func,
  navigation: PropTypes.object,
  gotQuestions: PropTypes.bool,
  gotQuestionsError: PropTypes.bool
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions);
