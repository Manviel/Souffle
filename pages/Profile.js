import React, { Component } from "react";
import { StyleSheet, View, Picker, Text } from "react-native";

import Button from "../components/Button";

class Profile extends Component {
  static navigationOptions = {
    title: "Profile"
  };

  state = {
    hearts: [],
    lang: "eng"
  };

  componentDidMount() {
    this.props.navigation.navigate("Profile");
  }

  logOut = () => alert("Log out");

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
