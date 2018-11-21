import React, { Component } from 'react';
import {
  View,
  Animated,
  StyleSheet,
  TouchableOpacity,
  Text
} from 'react-native';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';
import { removePlayer } from '../actions/playerAction';
import colors from '../../colors';

class PlayerContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      animatedValue: new Animated.Value(1000)
    };
  }

  componentDidMount() {
    Animated.timing(this.state.animatedValue, {
      toValue: 0,
      friction: 10,
      duration: 300,
      useNativeDriver: true
    }).start();
  }

  render() {
    const { animatedValue } = this.state;
    const { addPlayer, removePlayer, name } = this.props;
    return (
      <Animated.View
        style={[
          styles.container,
          { transform: [{ translateY: animatedValue }] }
        ]}
      >
        <TouchableOpacity style={styles.add} onPress={() => removePlayer(name)}>
          <Icon name="remove" type="materialIcons" color="#ff0000" />
        </TouchableOpacity>
        <Text style={styles.textInput}>{name.name}</Text>
      </Animated.View>
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
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    flex: 4,
    borderBottomWidth: 1,
    marginLeft: 7,
    fontSize: 18
  }
});

export default connect(
  null,
  { removePlayer }
)(PlayerContainer);
