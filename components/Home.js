import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  View
} from "react-native";
import { LinearGradient } from "expo";

import { firebase } from "../config/env";

import Logo from "./Logo";

class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };

  state = {
    events: []
  };

  componentDidMount() {
    firebase.ref("/events").on("value", snapshot => {
      let data = snapshot.val();
      let items = Object.values(data);

      this.setState({ events: items });
    });
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <ScrollView style={styles.container}>
        <Logo />
        {this.state.events.map((item, index) => (
          <LinearGradient
            key={index}
            colors={["#60E6FF", "#58A5FF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.item}
          >
            <View style={styles.card}>
              <Text style={styles.head}>{item.title}</Text>
              <Text style={styles.short}>{item.location}</Text>
              <Text>{item.date}</Text>
            </View>
          </LinearGradient>
        ))}
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigate("Profile")}
        >
          <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 16
  },
  item: {
    width: 240,
    height: 280,
    borderRadius: 35,
    marginVertical: 20
  },
  btn: {
    backgroundColor: "transparent",
    borderWidth: 2,
    borderColor: "#000",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 50,
    width: 140
  },
  card: {
    padding: 20
  },
  head: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "900"
  },
  short: {
    color: "#fff",
    fontSize: 14,
    marginVertical: 10
  },
  text: {
    fontSize: 15,
    textAlign: "center"
  }
});

export default Home;
