import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { cyan } from 'ansi-colors';

export const Navbar = props => {
  return (
    <View style={styles.navbar}>
      <Text style={styles.text}>What to do?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    height: 60,
    alignItems: 'center',
    justifyContent: "flex-end",
    backgroundColor: '#000',
  },
  text: {
    color: '#fff',
    fontSize: 20
  }
});
