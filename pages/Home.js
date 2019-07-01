import React, { Component } from "react";
import { StyleSheet, ScrollView, Text, View, Image } from "react-native";
import { LinearGradient } from "expo";

import { firebase } from "../config/env";

import Logo from "../components/Logo";

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
    return (
      <View style={styles.container}>
        <Logo navigate={this.props.navigation.navigate} />
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
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.short}>{item.location}</Text>
                <Text>{item.date}</Text>
              </View>
            </LinearGradient>
          ))}
        </ScrollView>
        <Text style={styles.head}>Trending</Text>
        <Text style={styles.today}>Find your favourites</Text>
        <ScrollView horizontal={true}>
          {this.state.events.map((item, index) => (
            <Image
              style={styles.circle}
              key={index}
              source={{ uri: item.src }}
            />
          ))}
          <View style={styles.add}>
            <Text style={styles.plus}>+</Text>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
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
  circle: {
    borderRadius: 35,
    height: 50,
    width: 50,
    marginRight: 10,
    marginTop: 20
  },
  add: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#494949",
    borderRadius: 35,
    height: 50,
    width: 50,
    marginTop: 20
  },
  plus: {
    color: "#fff",
    fontSize: 30
  },
  title: {
    color: "#fff",
    fontSize: 26,
    fontWeight: "900"
  },
  head: {
    fontSize: 40,
    paddingBottom: 5
  },
  today: {
    fontSize: 14,
    color: "#323232"
  },
  short: {
    color: "#fff",
    fontSize: 14,
    marginVertical: 10
  }
});

export default Home;
