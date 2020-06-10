import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export const TodoItem = ({ todo }) => {
  return(
    <View style={styles.todo}>
      <Text style={styles.text}>{todo.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        marginTop: 10,
        backgroundColor: '#3581b8',
        
        borderRadius: 30,
    },
    text: {
        color: '#fff',
    }
})

