import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import Nav from "./components/Nav";

class App extends Component {
  state = {
    number: 0
  };

  generate = () => {
    this.setState({
      number: Math.floor(Math.random() * 100)
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Nav />
        <Text>Open up Expo and start working on your app!</Text>
        <Button title="Generate" onPress={this.generate} />
        <Text>{this.state.number}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around"
  }
});

export default App;
