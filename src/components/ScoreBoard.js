import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import colors from '../../colors';

class ScoreBoard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { players, currentPlayer } = this.props;
    return (
      <View style={styles.board}>
        {players.map((player, key) => (
          <View
            key={key}
            style={[key === currentPlayer && styles.current, styles.around]}
          >
            <Text style={styles.onText}>{player.name}</Text>
            <Text style={styles.onText}>{player.score}</Text>
          </View>
        ))}
      </View>
    );
  }
}

const mapStateToProps = ({ players }) => {
  return { ...players };
};

const styles = StyleSheet.create({
  board: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    borderRadius: 8,
    marginTop: 10
  },
  current: {
    backgroundColor: colors.seaBlue
  },
  around: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    aspectRatio: 1,
    borderRadius: 8
  },
  onText: {
    fontSize: 17,
    fontWeight: '900',
    color: '#fff'
  }
});

ScoreBoard.propTypes = {
  players: PropTypes.array,
  currentPlayer: PropTypes.number
};

export default connect(
  mapStateToProps,
  {}
)(ScoreBoard);
