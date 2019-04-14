import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const Logo = () => (
  <View style={styles.flex}>
    <View>
      <Text style={styles.head}>Today</Text>
      <Text style={styles.today}>{new Date().toDateString()}</Text>
    </View>
    <Image source={require('../assets/logo.jpg')} style={styles.img} />
  </View>
);

const styles = StyleSheet.create({
  flex: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  head: {
    fontSize: 40,
    paddingBottom: 5
  },
  today: {
    fontSize: 14,
    color: '#323232'
  },
  img: {
    height: 40,
    width: 40
  }
});

export default Logo;
