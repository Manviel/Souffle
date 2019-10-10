import React from "react";
import { StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import ProgressBar from "./ProgressBar";

const Logo = props => (
  <LinearGradient
    colors={["#F2EEF1", "#FFFFFF"]}
    start={{ x: 0, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.container}
  >
    <View style={styles.column}>
      <TouchableOpacity onPress={() => props.navigate("Profile")}>
        <Image
          style={styles.play}
          source={{
            uri:
              "https://www.freepngimg.com/thumb/pause_button/25377-7-pause-button-image-thumb.png"
          }}
        />
      </TouchableOpacity>
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
  play: {
    width: 18,
    height: 18,
    marginBottom: 18
  },
  column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%"
  }
});

export default Logo;
