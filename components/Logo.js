import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

const Logo = props => (
  <View style={styles.flex}>
    <View>
      <Text style={styles.head}>Today</Text>
      <Text style={styles.today}>{new Date().toDateString()}</Text>
    </View>
    <TouchableOpacity onPress={() => props.navigate("Profile")}>
      <Image source={require("../assets/logo.jpg")} style={styles.img} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
    height: 40,
    width: 40
  }
});

export default Logo;
