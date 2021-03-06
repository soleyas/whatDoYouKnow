import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { addPlayer } from '../actions/playerAction';
import colors from '../../colors';
class ChoosePlayerBox extends Component {
  constructor(props) {
    super(props);
    this.addingPlayer = this.addingPlayer.bind(this);

    this.state = {
      inputName: ''
    };
  }

  addingPlayer = inputName => {
    const { players } = this.props;
    const { addPlayer } = this.props;
    if (players.length === 4) {
      alert('The maximum amount of players is 4');
      this.setState({ inputName: '' });
    } else if (inputName !== '') {
      addPlayer(inputName);
      this.setState({ inputName: '' });
    }
  };

  render() {
    const { inputName } = this.state;
    const { players } = this.props;
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.addingPlayer(inputName)}>
          <Icon name="add" type="materialIcons" color="#4BB543" />
        </TouchableOpacity>
        <TextInput
          style={styles.textInput}
          placeholder={'Your name here...'}
          onChangeText={inputName => this.setState({ inputName })}
          value={inputName}
          editable={players.length !== 4}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.red,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: colors.grey,
    margin: 7
  },
  add: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    aspectRatio: 1,
    backgroundColor: 'white'
  },
  textInput: {
    flex: 4,
    borderBottomWidth: 1,
    marginLeft: 5,
    fontSize: 15
  }
});

const mapStateToProps = ({ players }) => {
  return { ...players };
};

ChoosePlayerBox.propTypes = {
  players: PropTypes.array,
  addPlayer: PropTypes.func
};

export default connect(
  mapStateToProps,
  { addPlayer }
)(ChoosePlayerBox);
