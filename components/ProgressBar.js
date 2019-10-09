import React from "react";
import { StyleSheet, View, Text } from "react-native";

const ProgressBar = () => (
  <View style={styles.container}>
    <Text style={styles.shape}>Bar</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    width: 200,
    borderWidth: 5,
    borderRadius: 4,
    backgroundColor: "#F6F8F9"
  },
  shape: {
    width: 50,
    borderWidth: 5,
    borderRadius: 4,
    color: "#292F2F"
  }
});

export default ProgressBar;
