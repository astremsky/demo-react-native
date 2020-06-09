import React from 'react'
import {View, StyleSheet, TextInput, Button} from 'react-native'

export const AddTodo = props => {
    return(
        <View style={styles.block}>
            <TextInput style={styles.input}/>
            <Button style={styles.button} title='+' />
        </View>
    )
}

const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'

    },
    input: {
        width: '80%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        


    },
    button: {
       color: '#fff'
    }
})