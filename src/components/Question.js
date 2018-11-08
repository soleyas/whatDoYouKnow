import React, { Component } from "react";
import { connect } from "react-redux";
import { changeQuestion, getCategories } from "../actions/questionActions";
import { incrementScore, changePlayer } from "../actions/playerAction";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import colors from "../../colors";

class Question extends Component {
  constructor(props) {
    super(props);

    this.showAnswers = this.showAnswers.bind(this);
    this.setAnswers = this.setAnswers.bind(this);

    this.state = {
      answers: [],
      answer: ""
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
    this.setState({ answers, answer: "" });
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
        <View style={styles.innerQuestion}>
          <Text style={styles.questionText}>
            {this.parseString(question.question)}
          </Text>
        </View>
        <View style={styles.answerContainer}>
          {!answer
            ? answers.map((value, key) => (
                <TouchableOpacity
                  key={key}
                  onPress={() => this.showAnswers(value)}
                  style={styles.answer}
                >
                  <Text style={styles.answerText}>{value.value}</Text>
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
                      : ""
                  ]}
                  key={key}
                >
                  <Text style={styles.answerText}>{value.value}</Text>
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
    justifyContent: "space-around"
  },
  answerContainer: {
    flex: 1,
    justifyContent: "space-between"
  },
  answer: {
    padding: 20,
    backgroundColor: colors.lightBlue,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8
  },
  answerText: {
    color: "#fff",
    fontWeight: "700"
  },
  correct: {
    backgroundColor: colors.green
  },
  incorrect: {
    backgroundColor: colors.red
  },

  innerQuestion: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    marginTop: 50,
    marginBottom: 50,
    backgroundColor: colors.darkBlue,
    borderRadius: 8
  },
  questionText: {
    color: "#fff",
    fontWeight: "900",
    fontSize: 20
  }
});
const mapStateToProps = ({ questions, categories }) => {
  return { ...questions, ...categories };
};

const mapDispatchToProps = dispatch => {
  return {
    changeQuestion: () => {
      changeQuestion();
    },
    incrementScore: () => {
      incrementScore();
    },
    changePlayer: () => {
      changePlayer();
    },
    getCategories: () => {
      dispatch(getCategories());
    }
  };
};

export default connect(
  mapStateToProps,
  { changeQuestion, incrementScore, changePlayer, getCategories }
)(Question);
