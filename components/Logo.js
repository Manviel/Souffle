import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import ProgressBar from "./ProgressBar";

const Logo = props => (
  <LinearGradient
    colors={["#F2EEF1", "#FFFFFF"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.container}
  >
    <TouchableOpacity onPress={() => props.navigate("Profile")}>
      <Image source={require("../assets/logo.jpg")} style={styles.img} />
    </TouchableOpacity>
    <View>
      <Text style={styles.head}>Play</Text>
      <ProgressBar />
    </View>
  </LinearGradient>
);

const styles = StyleSheet.create({
  container: {
    height: 80,
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  head: {
    fontSize: 40,
    paddingBottom: 5
  },
  today: {
    fontSize: 14,
    color: "#323232"
  },
  img: {
    height: 28,
    width: 28
  }
});

export default Logo;
