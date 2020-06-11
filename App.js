import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import {Navbar} from './src/Navbar'
import {AddTodo} from './src/AddTodo'
import { TodoItem } from './src/TodoItem';

export default function App() {

  const[todos,setTodos] = useState([])

  const addTodo = (title) => {
    setTodos(prev => [{
      id: Date.now().toString(),
      title
    }, ...prev
    ])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <View>
      
      <Navbar title={'WHAT TO DO'}/>
      <View style={styles.container}>
      <AddTodo onSubmit={addTodo}/>

      <FlatList 
        keyExtractor={item => item.id.toString()}
        data={todos}
        renderItem={({item}) => (
          <TodoItem todo={item} onRemove = {removeTodo} />
        )}
      />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    height: '100%'
 },
});
