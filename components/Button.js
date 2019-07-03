import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const Button = props => (
  <TouchableOpacity style={styles.btn} onPress={props.onPress}>
    <Text style={styles.text}>{props.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#000",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 50,
    width: 140
  },
  text: {
    fontSize: 15,
    textAlign: "center"
  }
});

export default Button;
