import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import InputPlayer from '../components/players/InputPlayer'
import RegisterPlayer from '../components/players/RegisterPlayer'

export default function PlayerScreen() {
    const [player, setplayer] = useState()

    return (
        <View style={styles.container}>
            <InputPlayer namePlayer={p => setplayer(p)} />
            <RegisterPlayer numplayer={player} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#588157',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    jugar: {
        color: '#f4a261',
        fontSize: 30
    }
})