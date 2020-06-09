import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Navbar} from './src/Navbar'
import {AddTodo} from './src/AddTodo'

export default function App() {
  return (
    <View style={styles.container}>
      
      <Navbar title={'WHAT TO DO'}/>
      <AddTodo />
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
 },

});
