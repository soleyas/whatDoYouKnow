import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { getQuestions } from '../actions/questionActions';
import Question from './Question';
import ScoreBoard from './ScoreBoard';

class Questions extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const { getQuestions, questions } = this.props;
    console.log(this.props);
    getQuestions(10);
  }

  render() {
    const { gotQuestions, question } = this.props;
    return (
      <View style={styles.container}>
        {gotQuestions ? (
          <Question question={question} />
        ) : (
          <Text>Getting Questions</Text>
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
    backgroundColor: '#8A2BE2'
  }
});

const mapStateToProps = ({ questions }) => {
  return { ...questions };
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
