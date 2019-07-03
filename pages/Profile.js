import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Picker,
  Text,
  Dimensions,
  Animated
} from "react-native";

import { firebase } from "../config/env";

import ModalComponent from "../components/Modal";
import Button from "../components/Button";
import Heart from "../components/Heart";

const { width, height } = Dimensions.get("window");

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

class Profile extends Component {
  static navigationOptions = {
    title: "Profile"
  };

  state = {
    hearts: [],
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
    const animation = new Animated.Value(0);

    this.setState(
      state => {
        return {
          hearts: [
            ...state.hearts,
            {
              animation,
              start: getRandomInt(100, width - 100)
            }
          ]
        };
      },
      () => {
        Animated.timing(animation, {
          toValue: height,
          duration: 3000
        }).start();
      }
    );
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
        {this.state.hearts.map(({ animation, start }, index) => {
          const divide = height / 6;

          const position = animation.interpolate({
            inputRange: [0, height],
            outputRange: [height, 0]
          });

          const opacity = animation.interpolate({
            inputRange: [0, height],
            outputRange: [1, 0]
          });

          const scale = animation.interpolate({
            inputRange: [0, 15, 30],
            outputRange: [0, 1.2, 1],
            extrapolate: "clamp"
          });

          const wobble = animation.interpolate({
            inputRange: [
              0,
              divide,
              divide * 2,
              divide * 3,
              divide * 4,
              divide * 5,
              divide * 6
            ],
            outputRange: [0, 15, -15, 15, -15, 15, -15],
            extrapolate: "clamp"
          });

          const style = {
            left: start,
            transform: [
              { translateY: position },
              { scale: scale },
              { translateX: wobble }
            ],
            opacity: opacity
          };

          return <Heart key={index} style={style} />;
        })}
        <ModalComponent title="Open Modal" />
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
