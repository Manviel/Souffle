import React, { Component } from "react";
import { StyleSheet, ScrollView, Text, View } from "react-native";
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
    firebase
      .database()
      .ref("/events")
      .on("value", snapshot => {
        let data = snapshot.val();
        let items = Object.values(data);

        this.setState({ events: items });
      });
  }

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Logo navigate={navigate} />
        <ScrollView horizontal={true}>
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
        </ScrollView>
      </View>
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
    marginVertical: 20,
    marginRight: 10
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
  }
});

export default Home;
