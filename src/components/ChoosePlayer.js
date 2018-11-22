import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import ChoosePlayerBox from './ChoosePlayerBox';
import PlayerContainer from './PlayerContainer';
import colors from '../../colors';
import { getLastPlayers } from '../actions/playerAction';
import Storage from '../storage';

class ChoosePlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.getLastPlayers();
  }

  checkOnPlayers = () => {
    const { players, navigation } = this.props;
    if (players.length === 0) {
      alert('You need to have at least one player!');
    } else {
      const storage = new Storage();
      storage.setPlayersToStorage(players);
      navigation.navigate('Categories');
    }
  };

  render() {
    const { players } = this.props;
    return (
      <View style={styles.everything}>
        <View style={styles.container}>
          <Text style={styles.header}>Add Players</Text>
          <ChoosePlayerBox />
          {players.map((value, key) => (
            <PlayerContainer name={value} key={key} />
          ))}
        </View>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.checkOnPlayers()}
        >
          <Text style={styles.textInButton}>Continue</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  everything: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.lightBlue
  },
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
    margin: 10
  },
  header: {
    fontSize: 28,
    margin: 15
  },
  button: {
    backgroundColor: colors.mediumBlue,
    paddingBottom: 12,
    paddingTop: 12,
    paddingLeft: 25,
    paddingRight: 25,
    borderRadius: 8,
    margin: 20,
    justifyContent: 'space-between',
    marginBottom: 35,
    alignItems: 'center',
    width: '50%',
    borderColor: colors.seaBlue
  },
  textInButton: {
    fontSize: 20,
    color: '#FFF'
  }
});

const mapStateToProps = ({ players }) => {
  return { ...players };
};

const mapDispatchToProps = dispatch => {
  return {
    getLastPlayers: () => {
      dispatch(getLastPlayers());
    }
  };
};

ChoosePlayer.propTypes = {
  navigation: PropTypes.object,
  players: PropTypes.array
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChoosePlayer);
