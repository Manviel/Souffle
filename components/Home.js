import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

import Logo from "./Logo";

class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };

  state = {
    number: 0,
    value: "",
    users: []
  };

  generate = () => {
    this.setState({
      number: Math.floor(Math.random() * 100)
    });
  };

  addUser = () => {
    this.setState({
      users: [...this.state.users, this.state.value]
    });
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Logo />
        <TextInput
          placeholder="Your name"
          value={this.state.value}
          style={styles.input}
          onChangeText={value => this.setState({ value })}
          onSubmitEditing={this.addUser}
        />
        {this.state.users.map(i => (
          <Text key={i}>{i}</Text>
        ))}

        <Button title="Generate" onPress={this.generate} />
        <Text>{this.state.number}</Text>
        <Button title="Profile" onPress={() => navigate("Profile")} />
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
  },
  input: {
    backgroundColor: "rgb(230, 236, 240)",
    fontSize: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 50,
    width: 200
  }
});

export default Home;
