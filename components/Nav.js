import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Nav = () => (
  <View>
    <Text style={styles.head}>Native</Text>
  </View>
);

const styles = StyleSheet.create({
  head: {
    padding: 10,
    fontSize: 40
  }
});

export default Nav;
