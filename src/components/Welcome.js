import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Do you want to have some fun?</Text>
        <TouchableOpacity style={styles.button}>
          <Text>YES</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 26,
    fontWeight: "bold",
    padding: 8,
    textShadowColor: "rgba(0, 0, 0, 0.35)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    marginBottom: 15
  },
  button: {
    backgroundColor: "#4BB543",
    paddingBottom: 12,
    paddingTop: 12,
    paddingLeft: 25,
    paddingRight: 25,
    borderWidth: 1,
    borderRadius: 8
  },
  image: {
    width: null,
    height: null
    //sresizeMode: "cover"
  }
});

export default Welcome;
