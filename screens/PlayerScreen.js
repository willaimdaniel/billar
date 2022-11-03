import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import { NavContext } from '../context/NavContext'
import PlayersList from '../components/players/PlayersList'
import InputPlayer from '../components/players/InputPlayer'
import RegisterPlayer from '../components/players/RegisterPlayer'

export default function PlayerScreen() {
    const { setpage } = useContext(NavContext)
    const [player, setplayer] = useState()

    return (
        <View style={styles.container}>
            <PlayersList />
            <InputPlayer namePlayer={p => setplayer(p)} />
            <RegisterPlayer player={player} />
            <Pressable onPress={() => setpage('billar')}>
                <Text style={styles.jugar}>
                    Empezar a jugar
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#588157',
        alignItems: 'center',
        justifyContent: 'center',
    },
    jugar: {
        color: '#f4a261',
        fontSize: 30
    }
})