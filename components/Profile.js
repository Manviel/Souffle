import React, { Component } from "react";
import { StyleSheet, View, Picker } from "react-native";

import ModalComponent from "./Modal";

class Profile extends Component {
  static navigationOptions = {
    title: "Profile"
  };

  state = {
    lang: "eng"
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
