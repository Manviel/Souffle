import React from "react";
import { StyleSheet, View, Animated } from "react-native";

const Heart = props => (
  <Animated.View style={[styles.heart, props.style]}>
    <View style={styles.shape} />
  </Animated.View>
);

const styles = StyleSheet.create({
  heart: {
    position: "absolute"
  },
  shape: {
    width: 40,
    height: 40,
    borderRadius: 40 / 2,
    backgroundColor: "#f8dd7b"
  }
});

export default Heart;
