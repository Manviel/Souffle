import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

const Button = props => (
  <TouchableOpacity style={styles.btn} onPress={props.onPress}>
    <Text style={styles.text}>{props.title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  btn: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 18,
    width: 140
  },
  text: {
    fontSize: 15,
    color: "#fff",
    textAlign: "center",
    textTransform: "uppercase"
  }
});

export default Button;
