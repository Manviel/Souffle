import React, { Component } from "react";
import { Modal, View, StyleSheet, TextInput } from "react-native";

import { firebase } from "../config/env";

import Button from "./Button";

class ModalComponent extends Component {
  state = {
    modal: false,
    title: "",
    location: "",
    description: ""
  };

  handleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = () => {
    firebase
      .database()
      .ref("/events")
      .push({
        title: this.state.title,
        description: this.state.description,
        location: this.state.location
      })
      .then(() => alert("Success"));
  };

  render() {
    return (
      <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modal}
          onRequestClose={() => {}}
        >
          <View style={styles.container}>
            <TextInput
              placeholder="Title"
              value={this.state.title}
              style={styles.input}
              onChangeText={title => this.setState({ title })}
            />
            <TextInput
              placeholder="Description"
              value={this.state.description}
              style={styles.input}
              onChangeText={description => this.setState({ description })}
            />
            <TextInput
              placeholder="Location"
              value={this.state.location}
              style={styles.input}
              onChangeText={location => this.setState({ location })}
            />
            <Button title="Submit" onPress={this.handleSubmit} />
            <Button title="Close Modal" onPress={this.handleModal} />
          </View>
        </Modal>
        <Button title={this.props.title} onPress={this.handleModal} />
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

export default ModalComponent;
