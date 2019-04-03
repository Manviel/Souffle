import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

const Logo = () => (
  <View style={styles.flex}>
    <Image
      source={{
        uri:
          "https://facebook.github.io/react-native/img/showcase/adsmanager.png"
      }}
      style={styles.img}
    />
    <Text style={styles.head}>Native</Text>
  </View>
);

const styles = StyleSheet.create({
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  head: {
    padding: 10,
    fontSize: 40
  },
  img: {
    height: 40,
    width: 40
  }
});

export default Logo;
