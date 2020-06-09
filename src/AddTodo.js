import React from 'react'
import {View, StyleSheet, TextInput, Button} from 'react-native'

export const AddTodo = props => {
    return(
        <View style={styles.block}>
            <TextInput style={styles.input}/>
            <Button title='+' />
        </View>
    )
}

const styles =StyleSheet.create({
    
})