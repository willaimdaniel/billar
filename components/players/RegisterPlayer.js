import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useContext, useState } from 'react'
import { PlayersContext } from '../../context/PlayersContext'

export default function RegisterPlayer({ player }) {
    const { players, setplayers } = useContext(PlayersContext)
    const [idPlayer, setidPlayer] = useState(1)

    function register() {
        if (player) {
            setidPlayer(idPlayer + 1)
            setplayers([...players, {idPlayer, player}])
        } else {
            alert('Por favor ingresa tu nombre')
        }
    }

    return (
        <View>
            <Pressable onPress={register}>
                <Text style={styles.title}>
                    Registrar jugador
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#dad7cd',
        fontSize: 40
    }
})