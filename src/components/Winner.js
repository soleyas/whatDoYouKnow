import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  Easing,
  TouchableOpacity
} from 'react-native';
import LottieView from 'lottie-react-native';
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

    const { transformValue } = this.state;

    return (
      <View style={styles.container}>
        {winners.length === 1 && (
          <View style={styles.content}>
            <LottieView
              source={require('../../assets/fireworks.json')}
              autoPlay
              loop
            />
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

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('Categories')}
            >
              <Text style={styles.textInButton}>Play again</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('ChoosePlayer')}
            >
              <Text style={styles.textInButton}>
                Play again with different players
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.darkBlue
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
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
