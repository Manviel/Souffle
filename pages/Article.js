import React, { Component } from "react";
import { StyleSheet, View, Text } from "react-native";

class Article extends Component {
  static navigationOptions = {
    title: "Article"
  };

  render() {
    const item = this.props.navigation.getParam("item");

    return (
      <View style={styles.container}>
        <Text style={styles.short}>{item.location}</Text>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.card}>{item.description}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    padding: 10
  },
  short: {
    backgroundColor: "#FFF5F7",
    width: "100%",
    color: "#CC7B8E",
    fontSize: 14,
    padding: 20,
    marginBottom: 15
  },
  title: {
    fontWeight: "900",
    backgroundColor: "#feebef",
    width: "100%",
    fontSize: 26,
    padding: 20,
    marginBottom: 15
  },
  card: {
    backgroundColor: "#fff",
    padding: 20,
    marginBottom: 15
  }
});

export default Article;
