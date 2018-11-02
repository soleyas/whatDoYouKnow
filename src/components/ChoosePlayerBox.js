import React from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity
} from 'react-native';
import { Icon } from 'react-native-elements';

const ChoosePlayerBox = () => (
  <View style={styles.container}>
    <TouchableOpacity style={styles.add}>
      <Icon name="add" type="materialIcons" color="#4b6573" />
    </TouchableOpacity>
    <TextInput />
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: '8%',
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderWidth: 1
  },
  add: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    aspectRatio: 1,
    borderRadius: 8
  },
  addText: {
    color: '#fff',
    fontSize: 40,
    fontWeight: '900',
    padding: 0,
    margin: 0,
    textAlign: 'center',
    textAlignVertical: 'center'
  }
});

export default ChoosePlayerBox;