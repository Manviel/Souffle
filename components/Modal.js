import React, { Component } from "react";
import {
  Text,
  Modal,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";

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
            <Text>{this.props.title}</Text>
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
            <Button title="Close Modal" onPress={this.handleModal} />
          </View>
        </Modal>
        <TouchableOpacity onPress={this.handleModal}>
          <Image
            style={styles.play}
            source={{
              uri:
                "https://www.freepngimg.com/thumb/pause_button/25377-7-pause-button-image-thumb.png"
            }}
          />
        </TouchableOpacity>
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
  play: {
    width: 28,
    height: 28,
    marginBottom: 18
  }
});

export default ModalComponent;
