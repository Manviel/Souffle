import React, { Component, Fragment } from "react";
import {
  Text,
  Modal,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image
} from "react-native";

import Button from "./Button";

const songs = [
  {
    id: 1,
    title: "Beam",
    artist: "Petit biscuit",
    src:
      "http://www.tinmanlondon.com/wp-content/uploads/2017/11/Petit-Biscuit-Problems-ft.-Lido.jpg"
  },
  {
    id: 2,
    title: "Ash",
    artist: "Ibeyi",
    src: "http://dis.resized.images.s3.amazonaws.com/540x540/105138.jpeg"
  },
  {
    id: 3,
    title: "Feel it all",
    artist: "Washed Out",
    src:
      "https://img.discogs.com/lmenmdII4wweyVVI2qoXxQnOdA0=/fit-in/500x500/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-2536530-1321560057.jpeg.jpg"
  },
  {
    id: 4,
    title: "Thunder",
    artist: "Imagine Dragons",
    src:
      "https://upload.wikimedia.org/wikipedia/ru/thumb/2/28/Imagine_Dragons_Thunder.jpg/270px-Imagine_Dragons_Thunder.jpg"
  },
  {
    id: 5,
    title: "Humble",
    artist: "Kendrick Lamar",
    src: "https://i1.sndcdn.com/artworks-000217856376-1w0eqt-t500x500.jpg"
  }
];

class ModalComponent extends Component {
  state = {
    modal: false,
    search: ""
  };

  handleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  render() {
    return (
      <Fragment>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modal}
          onRequestClose={() => {}}
        >
          <View style={styles.container}>
            <Text style={styles.header}>{this.props.title}</Text>
            {songs.map(item => {
              return (
                <View style={styles.flex} key={item.id}>
                  <Image
                    style={styles.album}
                    key={item.id}
                    source={{ uri: item.src }}
                  />
                  <View style={styles.info}>
                    <Text style={styles.title}>{item.title}</Text>
                    <Text style={styles.short}>{item.artist}</Text>
                  </View>
                </View>
              );
            })}
            <TextInput
              placeholder="Search"
              value={this.state.search}
              style={styles.input}
              onChangeText={search => this.setState({ search })}
            />
            <Button title="Close Modal" onPress={this.handleModal} />
          </View>
        </Modal>
        <TouchableOpacity onPress={this.handleModal}>
          <Image
            style={styles.play}
            source={{
              uri:
                "https://www.freepngimg.com/thumb/pause_button/25377-7-pause-button-image-thumb.png"
            }}
          />
        </TouchableOpacity>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    justifyContent: "space-around"
  },
  header: {
    color: "#979797",
    fontSize: 30,
    marginBottom: 15
  },
  flex: {
    display: "flex",
    flexDirection: "row"
  },
  album: {
    borderRadius: 5,
    height: 50,
    width: 50
  },
  info: {
    marginLeft: 18
  },
  title: {
    color: "#292F2F",
    fontSize: 16
  },
  short: {
    color: "#BFBFC1",
    fontSize: 14
  },
  input: {
    fontSize: 18,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 18,
    width: "100%",
    borderBottomWidth: 2,
    borderBottomColor: "#E9E9E9"
  },
  play: {
    width: 28,
    height: 28,
    marginBottom: 18
  }
});

export default ModalComponent;
