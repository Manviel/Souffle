import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Picker,
  TextInput,
  Button,
  Text
} from 'react-native';

import ModalComponent from './Modal';

class Profile extends Component {
  static navigationOptions = {
    title: 'Profile'
  };

  state = {
    number: 0,
    value: '',
    lang: 'eng',
    users: []
  };

  addUser = () => {
    this.setState({
      users: [...this.state.users, this.state.value]
    });
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
        <ModalComponent />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  input: {
    backgroundColor: 'rgb(230, 236, 240)',
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

export default Profile;
