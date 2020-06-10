import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Navbar} from './src/Navbar'
import {AddTodo} from './src/AddTodo'

export default function App() {

  const[todos,setTodos] = useState([])

  const addTodo = (title) => {
    setTodos(prev => [{
      id: Date.now().toString(),
      title
    }, ...prev
    ])
  }


  return (
    <View>
      
      <Navbar title={'WHAT TO DO'}/>
      <View style={styles.container}>
        <AddTodo onSubmit={addTodo}/>
      </View>
      
      
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20
 },

});
