import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeQuestion } from '../actions/questionActions';
import { incrementScore, changePlayer } from '../actions/playerAction';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../../colors';

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

  setAnswers(props) {
    const { question } = props;
    const incorrect = question.incorrect_answers.map(value => ({
      value: value,
      correct: false
    }));
    const answers = [
      ...incorrect,
      { value: unescape(question.correct_answer), correct: true }
    ];
    answers.sort(() => Math.random() - 0.5);
    this.setState({ answers, answer: '' });
  }

  showAnswers(answer) {
    const {
      changeQuestion,
      question,
      incrementScore,
      changePlayer,
      checkForWinner
    } = this.props;
    this.setState({ answer });
    if (answer.value === unescape(question.correct_answer)) {
      incrementScore();
    }
    checkForWinner();
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
        <View style={styles.innerQuestion}>
          <Text style={styles.questionText}>{unescape(question.question)}</Text>
        </View>
        <View style={styles.answerContainer}>
          {!answer
            ? answers.map((value, key) => (
                <TouchableOpacity
                  key={key}
                  onPress={() => this.showAnswers(value)}
                  style={styles.answer}
                >
                  <Text style={styles.answerText}>{unescape(value.value)}</Text>
                </TouchableOpacity>
              ))
            : answers.map((value, key) => (
                <View
                  style={[
                    styles.answer,
                    value.value === answer.value || value.correct
                      ? value.correct
                        ? styles.correct
                        : styles.incorrect
                      : ''
                  ]}
                  key={key}
                >
                  <Text style={styles.answerText}>{unescape(value.value)}</Text>
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
    justifyContent: 'space-between'
  },
  answer: {
    padding: 20,
    backgroundColor: colors.lightBlue,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  answerText: {
    color: '#fff',
    fontWeight: '700'
  },
  correct: {
    backgroundColor: colors.green
  },
  incorrect: {
    backgroundColor: colors.red
  },

  innerQuestion: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: colors.darkBlue,
    borderRadius: 8
  },
  questionText: {
    color: '#fff',
    fontWeight: '900',
    fontSize: 20
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
