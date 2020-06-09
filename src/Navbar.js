import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { cyan } from 'ansi-colors';

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
    backgroundColor: '#000',
    padding: 5
  },
  text: {
    color: '#fff',
    fontSize: 15
  }
});
