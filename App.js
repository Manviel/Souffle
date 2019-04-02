import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  Picker
} from "react-native";

import Nav from "./components/Nav";

class App extends Component {
  state = {
    number: 0,
    value: "",
    lang: "eng",
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
    return (
      <View style={styles.container}>
        <Nav />
        {this.state.users.map(i => (
          <Text key={i}>{i}</Text>
        ))}
        <TextInput
          placeholder="Your name"
          value={this.state.value}
          style={styles.input}
          onChangeText={value => this.setState({ value })}
          onSubmitEditing={this.addUser}
        />
        <Button title="Generate" onPress={this.generate} />
        <Text>{this.state.number}</Text>
        <Picker
          style={styles.pick}
          selectedValue={this.state.lang}
          onValueChange={itemValue => this.setState({ lang: itemValue })}
        >
          <Picker.Item label="ENG" value="eng" />
          <Picker.Item label="RUS" value="rus" />
        </Picker>
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
  },
  pick: {
    width: 200
  }
});

export default App;
