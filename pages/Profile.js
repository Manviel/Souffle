import React, { Component } from "react";
import { StyleSheet, View, Picker, Text } from "react-native";

import { firebase } from "../config/env";

import ModalComponent from "../components/Modal";
import Button from "../components/Button";

class Profile extends Component {
  static navigationOptions = {
    title: "Profile"
  };

  state = {
    number: 0,
    lang: "eng",
    user: null
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ user });

      this.props.navigation.navigate(user ? "Profile" : "Login");
    });
  }

  generate = () => {
    this.setState({
      number: Math.floor(Math.random() * 100)
    });
  };

  logOut = () => firebase.auth().signOut();

  render() {
    return (
      <View style={styles.container}>
        {this.state.user ? <Text>Hello, {this.state.user.email}</Text> : null}
        <Button title="Log Out" onPress={this.logOut} />
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
