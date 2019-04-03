import React, { Component } from "react";
import { Modal, Button, View, StyleSheet } from "react-native";

import Logo from "./Logo";

class ModalComponent extends Component {
  state = {
    modal: false
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
            <Logo />
            <Button title="Close Modal" onPress={this.handleModal} />
          </View>
        </Modal>
        <Button title="Open Modal" onPress={this.handleModal} />
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

export default ModalComponent;
