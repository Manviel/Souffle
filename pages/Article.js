import React, { Component, Fragment } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import Logo from "../components/Logo";

class Article extends Component {
  static navigationOptions = {
    title: "Article"
  };

  render() {
    const item = this.props.navigation.getParam("item");

    return (
      <Fragment>
        <View style={styles.container}>
          <Text style={styles.head}>Currently Playing</Text>
          <View style={styles.flex}>
            <Image
              style={styles.album}
              key={item.id}
              source={{ uri: item.src }}
            />
            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.label}>Artist</Text>
              <Text style={styles.short}>{item.artist}</Text>
              <Text style={styles.label}>Album</Text>
              <Text style={styles.short}>{item.album}</Text>
            </View>
          </View>
        </View>
        <Logo navigate={this.props.navigation.navigate} />
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F8F9",
    padding: 16
  },
  head: {
    color: "#7D888C",
    fontSize: 28,
    marginBottom: 30
  },
  album: {
    borderRadius: 5,
    height: 130,
    width: 130
  },
  flex: {
    display: "flex",
    flexDirection: "row"
  },
  info: {
    marginLeft: 30
  },
  title: {
    fontWeight: "900",
    color: "#0F1F2E",
    fontSize: 30,
    marginBottom: 15
  },
  short: {
    color: "#7F888D",
    fontSize: 14,
    marginBottom: 12
  },
  label: {
    color: "#7F888D",
    fontWeight: "500",
    marginBottom: 12
  }
});

export default Article;
