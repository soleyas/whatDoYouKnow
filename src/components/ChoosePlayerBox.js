import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
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
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#bbe556',
    borderWidth: 1
  },
  add: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    aspectRatio: 1,
    backgroundColor: 'red'
  },
  textInput: {
    flex: 4,
    borderBottomWidth: 1
  }
});

export default ChoosePlayerBox;
