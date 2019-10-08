import React, { Component } from "react";
import { StyleSheet, Text, TextInput, View, Button } from "react-native";

class Login extends Component {
  static navigationOptions = {
    title: "Login"
  };

  state = {
    email: "",
    password: "",
    errorMessage: null
  };

  handleSubmit = () => {
    this.props.navigation.navigate("Profile");
  };

  render() {
    return (
      <View style={styles.container}>
        {this.state.errorMessage && (
          <Text style={{ color: "red" }}>{this.state.errorMessage}</Text>
        )}
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={email => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.input}
          placeholder="Password"
          onChangeText={password => this.setState({ password })}
          value={this.state.password}
        />
        <Button title="Login" onPress={this.handleSubmit} />
        <Button
          title="Don't have an account?"
          onPress={() => this.props.navigation.navigate("SignUp")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    alignItems: "center"
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

export default Login;
