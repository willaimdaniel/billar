import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'

export default function InputPlayer({namePlayer}) {
    
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Nombre del jugador'
                placeholderTextColor={'#a3b18a'}
                onChangeText={namePlayer}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#344e41',
        color: '#dad7cd',
        textAlign: 'center',
        fontSize: 40,
        padding: 10
    },
})