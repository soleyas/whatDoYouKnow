import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeQuestion } from '../actions/questionActions';
import { incrementScore, changePlayer } from '../actions/playerAction';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Question extends Component {
  constructor(props) {
    super(props);

    this.showAnswers = this.showAnswers.bind(this);
    this.setAnswers = this.setAnswers.bind(this);

    this.state = {
      answers: [],
      answer: ''
    };
  }

  componentDidMount() {
    this.setAnswers(this.props);
  }

  componentWillReceiveProps(props) {
    this.setAnswers(props);
  }

  parseString(str) {
    return str;
  }

  setAnswers(props) {
    const { question } = props;
    const incorrect = question.incorrect_answers.map(value => ({
      value: value,
      correct: false
    }));
    const answers = [
      ...incorrect,
      { value: this.parseString(question.correct_answer), correct: true }
    ];
    answers.sort(() => Math.random() - 0.5);
    this.setState({ answers, answer: '' });
  }

  showAnswers(answer) {
    const {
      changeQuestion,
      question,
      incrementScore,
      changePlayer
    } = this.props;
    this.setState({ answer });
    if (answer.value === question.correct_answer) {
      incrementScore();
    }
    setTimeout(() => {
      changePlayer();
      changeQuestion();
    }, 1000);
  }

  render() {
    const { question } = this.props;
    const { answers, answer } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.question}>
          <Text>{this.parseString(question.question)}</Text>
        </View>
        <View style={styles.answerContainer}>
          {!answer
            ? answers.map((value, key) => (
                <TouchableOpacity
                  key={key}
                  onPress={() => this.showAnswers(value)}
                  style={styles.answer}
                >
                  <Text key={key}>{value.value}</Text>
                </TouchableOpacity>
              ))
            : answers.map((value, key) => (
                <View
                  style={[
                    styles.answer,
                    value.value === answer || value.correct
                      ? value.correct
                        ? styles.correct
                        : styles.incorrect
                      : ''
                  ]}
                  key={key}
                >
                  <Text>{value.value}</Text>
                </View>
              ))}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around'
  },
  answerContainer: {
    flex: 1,
    justifyContent: 'space-around'
  },
  answer: {
    padding: 20,
    backgroundColor: '#E8E8E8',
    alignItems: 'center',
    justifyContent: 'center'
  },
  correct: {
    backgroundColor: 'green'
  },
  incorrect: {
    backgroundColor: 'red'
  },
  question: {
    flex: 1,
    padding: 40,
    backgroundColor: '#4BB543',
    justifyContent: 'center',
    alignItems: 'center'
  }
});
const mapStateToProps = ({ questions }) => {
  return { ...questions };
};

export default connect(
  mapStateToProps,
  { changeQuestion, incrementScore, changePlayer }
)(Question);

/*
                Object {
[15:10:26]       "category": "Entertainment: Comics",
[15:10:26]       "correct_answer": "Mega Man",
[15:10:26]       "difficulty": "easy",
[15:10:26]       "incorrect_answers": Array [
[15:10:26]         "Super Mario Brothers",
[15:10:26]         "Alex Kidd",
[15:10:26]         "Super Monkey Ball",
[15:10:26]       ],
[15:10:26]       "question": "Which universe crossover was introduced in the &quot;Sonic the Hedgehog&quot; comic issue #247?",
[15:10:26]       "type": "multiple",
[15:10:26]     }
*/
