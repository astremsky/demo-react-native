import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export const TodoItem = ({ todo }) => {
  return(
    <TouchableOpacity activeOpacity={0.5}>
    <View style={styles.todo}>
      <Text style={styles.text}>{todo.title}</Text>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        marginTop: 10,
        backgroundColor: '#3581b8',
        borderRadius: 30,
    },
    text: {
        color: '#fff',
        fontSize: 20
    }
})

