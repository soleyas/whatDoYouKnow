import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import colors from '../../colors';

class Winner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transformValue: new Animated.Value(0)
    };
  }
  componentDidMount() {
    Animated.spring(this.state.transformValue, {
      toValue: 1,
      friction: 10,
      delay: 1000,
      useNativeDriver: true
    }).start();
  }

  render() {
    const winners = this.props.navigation.state.params;
    console.log(winners);
    console.log('aaaaaaaaaaaaaaaaaaaaaa', this.props.navigation.state.params);
    const { transformValue } = this.state;
    const { nextStep } = this.props;
    const { changeYes } = this.props;

    return (
      <View style={styles.container}>
        {winners.length === 1 && (
          <View style={styles.content}>
            <Text style={styles.winnerTitle}>THE WINNER IS</Text>
            <Animated.View
              style={[
                styles.winner,
                {
                  transform: [{ scale: transformValue }]
                }
              ]}
            >
              <Text>{winners[0].name}</Text>
            </Animated.View>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.darkBlue
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  winnerTitle: {
    fontSize: 40,
    fontWeight: '900',
    color: '#fff'
  },
  winner: {
    backgroundColor: colors.seaBlue,
    padding: 20
  },
  button: {
    backgroundColor: colors.mediumBlue,
    alignItems: 'center',
    padding: 12,
    borderRadius: 8
  },
  textInButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  }
});

const mapStateToProps = ({ players }) => {
  return { ...players };
};

export default connect(
  mapStateToProps,
  {}
)(Winner);
