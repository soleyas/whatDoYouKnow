import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from 'react-native';
import colors from '../../colors';

class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBackground}
          source={require('../../assets/RyanBabe.png')}
          style={{ width: '100%', height: '100%' }}
        >
          <View style={styles.content}>
            <View style={styles.textView}>
              <Text style={styles.textHeyYou}>Hey you!</Text>
              <Text style={styles.text}>Do you want to play a game?</Text>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={() => this.props.navigation.navigate('ChoosePlayer')}
            >
              <Text style={styles.textInButton}>YES</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mediumBlue,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: 40
  },
  content: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  text: {
    fontSize: 25,
    textShadowRadius: 10,
    marginBottom: 15,
    color: colors.mediumBlue
  },
  button: {
    marginTop: 20,
    backgroundColor: colors.mediumBlue,
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 8,
    marginBottom: 25
  },
  textView: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: '100%'
  },
  textInButton: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  },
  textHeyYou: {
    fontSize: 27,
    fontWeight: 'bold',
    textShadowRadius: 10,
    color: colors.mediumBlue,
    paddingTop: 10
  }
});

Welcome.propTypes = {
  navigation: PropTypes.object
};

export default Welcome;
