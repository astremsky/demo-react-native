import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Navbar = props => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    alignItems: 'center',
    justifyContent: "flex-end",
    backgroundColor: '#3581b8',
    padding: 5
  },
  text: {
    color: '#fff',
    fontSize: 15
  }
});
