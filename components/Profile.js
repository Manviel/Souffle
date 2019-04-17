import React, { Component } from "react";
import { StyleSheet, View, Picker, Button, Text } from "react-native";

import ModalComponent from "./Modal";

class Profile extends Component {
  static navigationOptions = {
    title: "Profile"
  };

  state = {
    number: 0,
    lang: "eng"
  };

  generate = () => {
    this.setState({
      number: Math.floor(Math.random() * 100)
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Picker
          style={styles.pick}
          selectedValue={this.state.lang}
          onValueChange={itemValue => this.setState({ lang: itemValue })}
        >
          <Picker.Item label="ENG" value="eng" />
          <Picker.Item label="RUS" value="rus" />
        </Picker>
        <Button title="Generate" onPress={this.generate} />
        <Text>{this.state.number}</Text>
        <ModalComponent />
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
  pick: {
    width: 200
  }
});

export default Profile;
