import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export const TodoItem = ({ todo }) => {
  return(
    <View style={styles.todo}>
      <Text>{todo.title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#fff',
        color: '#000',
        borderRadius: '50%',
    }
})

