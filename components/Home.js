import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo';

import Logo from './Logo';

class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <Logo />
        <LinearGradient
          colors={['#60E6FF', '#58A5FF']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={styles.item}
        />
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigate('Profile')}
        >
          <Text style={styles.text}>Profile</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16
  },
  item: {
    width: 240,
    height: 280,
    borderRadius: 35,
    marginVertical: 20
  },
  btn: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#000',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 50,
    width: 140
  },
  text: {
    fontSize: 15,
    textAlign: 'center'
  }
});

export default Home;
