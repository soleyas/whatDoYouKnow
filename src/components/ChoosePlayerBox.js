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
    <TextInput style={styles.textInput} placeholder={'Your name here...'} />
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
  textInput: {
    flex: 1,
    borderBottomWidth: 1
  }
});

export default ChoosePlayerBox;
