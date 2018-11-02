import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class Question extends Component {
  renderAnswers(question) {
    const answers = [...question.incorrect_answers, question.correct_answer];
    answers.sort(() => Math.random() - 0.5);
    return (
      <View>
        {answers.map((value, key) => (
          <TouchableOpacity key={key}>
            <Text>{unescape(value)}</Text>
          </TouchableOpacity>
        ))}
      </View>
    );
  }
  render() {
    const { question } = this.props;
    return (
      <View style={styles.container}>
        <Text>{unescape(question.question)}</Text>
        {this.renderAnswers(question)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Question;

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
