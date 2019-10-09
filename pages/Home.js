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
      "http://www.tinmanlondon.com/wp-content/uploads/2017/11/Petit-Biscuit-Problems-ft.-Lido.jpg"
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
