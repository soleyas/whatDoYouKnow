import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  ImageBackground,
  Image,
} from "react-native";
import ChoosePlayer from "./ChoosePlayer";
import colors from "../../colors";

class Welcome extends Component {
  render() {
    const { changeYes } = this.props;
    return (
      <View style={styles.container}>
        <ImageBackground
          style={styles.imageBackground}
          source={require("/Users/harpahreinsdottir/Documents/HR-haust-2018/ThrounSmaforrita/bigAssignment/whatdoyouknow/assets/RyanBabe.png")}
          style={{ width: "100%", height: "100%" }}
        >
          <View style={styles.textView}>
            <Text style={styles.text}>
              Hey you! {"\n"}
              Do you want to play a game?
            </Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={() => changeYes()}>
            <Text style={styles.textInButton}>YES</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.mediumBlue,
    alignItems: "center",
    justifyContent: "center",
    paddingTop:40,
  },
  text: {
    fontSize: 27,
    padding:20,
    textShadowRadius: 10,
    marginBottom: 15,
    color: colors.mediumBlue,
  },
  
  button: {
    backgroundColor: colors.mediumBlue,
    paddingBottom: 12,
    paddingTop: 12,
    paddingLeft: 25,
    paddingRight: 25,
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: 120,
    marginRight: 120,
    marginTop:15,
    alignItems:"center",
  },
  textView:{
    marginTop:650,
    backgroundColor: "white",
    alignItems:"center",
    justifyContent:"center"
  },
  textInButton:{
    color: "white",
    fontWeight: "bold",
    fontSize:20,
    textAlign: 'center'
  }
});

export default Welcome;
