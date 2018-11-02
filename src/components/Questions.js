import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getQuestions, removeQuestion } from '../actions/questionActions';
import Question from './Question';

class Questions extends Component {
  componentDidMount() {
    const { getQuestions } = this.props;
    console.log(this.props);
    getQuestions(10);
  }

  getRandomQuestion() {
    const { questions, removeQuestion } = this.props;
    const randomIndex = Math.floor(Math.random() * questions.length);
    const randomQuestion = questions[randomIndex];
    removeQuestion(randomIndex);
    return randomQuestion;
  }

  render() {
    const { gotQuestions } = this.props;
    return (
      <View style={styles.container}>
        {gotQuestions ? (
          <Question question={this.getRandomQuestion()} />
        ) : (
          <Text>Getting Questions</Text>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  }
});

const mapStateToProps = ({ questions }) => {
  return { ...questions };
};

const mapDispatchToProps = dispatch => {
  return {
    getQuestions: amount => {
      dispatch(getQuestions(amount));
    },
    removeQuestion: index => {
      removeQuestion(index);
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions);
