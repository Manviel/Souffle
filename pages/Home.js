import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";

import Logo from "../components/Logo";
import ModalComponent from "../components/Modal";

const events = [
  {
    id: 0,
    title: "Feel It All Around",
    location: "Washed Out",
    src:
      "https://img.discogs.com/lmenmdII4wweyVVI2qoXxQnOdA0=/fit-in/500x500/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2536530-1321560057.jpeg.jpg"
  }
];

class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    return (
      <View style={styles.container}>
        <Logo navigate={this.props.navigation.navigate} />
        <ScrollView horizontal={true}>
          {events.map(item => {
            return (
              <TouchableOpacity
                key={item.id}
                style={styles.card}
                onPress={() =>
                  this.props.navigation.navigate("Article", {
                    item: item
                  })
                }
              >
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.short}>{item.location}</Text>
                <Image
                  style={styles.circle}
                  key={item.id}
                  source={{ uri: item.src }}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
        <Text style={styles.head}>Trending</Text>
        <Text style={styles.today}>Find your favourites</Text>
        <ModalComponent title="Add" />
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
    padding: 20
  },
  card: {
    padding: 20,
    marginRight: 10,
    marginVertical: 20,
    backgroundColor: "#D7E3EB"
  },
  circle: {
    borderRadius: 35,
    height: 50,
    width: 50,
    marginRight: 10,
    marginTop: 20
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  title: {
    color: "#0F1F2E",
    fontSize: 26,
    fontWeight: "900"
  },
  head: {
    fontSize: 40,
    paddingBottom: 5
  },
  today: {
    fontSize: 14,
    color: "#323232",
    marginBottom: 15
  },
  short: {
    color: "#7F888D",
    fontSize: 14,
    marginVertical: 10
  }
});

export default Home;
