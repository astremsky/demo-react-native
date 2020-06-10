import React from 'react'
import {View, StyleSheet, TextInput, Button} from 'react-native'

export const AddTodo = ({ onSubmit }) => {

    const pressAdd = () => {
        onSubmit('Test ADD todo')
    }

    return(
        <View style={styles.block}>
            <TextInput style={styles.input}/>
            <Button style={styles.button} title='+' onPress={pressAdd} />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    input: {
        width: '80%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        padding: 15,
    },
    button: {
       color: '#fff'
    }
})