import React from "react";
import { StyleSheet, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import ProgressBar from "./ProgressBar";
import Modal from "./Modal";

const Logo = () => (
  <LinearGradient
    colors={["#F2EEF1", "#FFFFFF"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.container}
  >
    <View style={styles.column}>
      <Modal title="Queue" />
      <ProgressBar />
    </View>
  </LinearGradient>
);

const styles = StyleSheet.create({
  container: {
    height: 80,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: 16
  },
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  }
});

export default Logo;
