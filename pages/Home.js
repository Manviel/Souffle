import React, { Component } from "react";
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity
} from "react-native";

const events = [
  {
    id: 1,
    title: "Beam",
    artist: "Petit biscuit",
    album: "Master bedrom",
    src:
      "data:image/jpeg;base64,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"
  },
  {
    id: 2,
    title: "Ash",
    artist: "Ibeyi",
    album: "Pool",
    src: "http://dis.resized.images.s3.amazonaws.com/540x540/105138.jpeg"
  },
  {
    id: 3,
    title: "Feel it all",
    artist: "Petit biscuit",
    album: "Washed Out",
    src:
      "https://img.discogs.com/lmenmdII4wweyVVI2qoXxQnOdA0=/fit-in/500x500/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2536530-1321560057.jpeg.jpg"
  }
];

const accounts = [
  {
    id: 0,
    title: "Soundcloud"
  },
  {
    id: 1,
    title: "Apple Music"
  },
  {
    id: 2,
    title: "Spotify"
  }
];

class Home extends Component {
  static navigationOptions = {
    title: "Home"
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {events.map(item => {
          return (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.card,
                item.id % 2 === 0 ? styles.white : styles.black
              ]}
              onPress={() =>
                this.props.navigation.navigate("Article", {
                  item: item
                })
              }
            >
              <View style={styles.flex}>
                <View style={styles.flex}>
                  <Image
                    style={styles.album}
                    key={item.id}
                    source={{ uri: item.src }}
                  />
                  <View style={styles.info}>
                    <Text
                      style={[
                        styles.title,
                        item.id % 2 === 0 ? styles.white : styles.black
                      ]}
                    >
                      {item.title}
                    </Text>
                    <Text style={styles.short}>{item.artist}</Text>
                  </View>
                </View>
                <Image
                  style={styles.spotify}
                  source={{
                    uri:
                      item.id % 2 === 0
                        ? "https://seeklogo.com/images/S/spotify-logo-7839B39C1B-seeklogo.com.png"
                        : "https://seeklogo.com/images/S/spotify-2015-logo-560E071CB7-seeklogo.com.png"
                  }}
                />
              </View>
              <Text
                style={[
                  styles.title,
                  item.id % 2 === 0 ? styles.white : styles.black
                ]}
              >
                {item.album}
              </Text>
            </TouchableOpacity>
          );
        })}
        <Text style={styles.head}>ACCOUNTS</Text>
        {accounts.map(a => (
          <Text key={a.id} style={styles.head}>
            {a.title}
          </Text>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F6F8F9",
    padding: 16
  },
  card: {
    padding: 20,
    marginVertical: 20,
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6.2,
    elevation: 10
  },
  black: {
    backgroundColor: "#292F2F",
    color: "#F2F2F2"
  },
  white: {
    backgroundColor: "#fff",
    color: "#333333"
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  },
  column: {
    display: "flex",
    flexDirection: "column"
  },
  album: {
    borderRadius: 5,
    height: 50,
    width: 50
  },
  spotify: {
    height: 28,
    width: 28
  },
  title: {
    fontSize: 26,
    fontWeight: "900"
  },
  short: {
    color: "#878B8C",
    fontSize: 14
  },
  info: {
    marginLeft: 18
  },
  head: {
    color: "#8A9294",
    fontSize: 12,
    paddingVertical: 10,
    marginBottom: 10
  }
});

export default Home;
