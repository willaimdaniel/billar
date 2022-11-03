import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { PlayersContext } from '../../context/PlayersContext'
import {NavContext} from '../../context/NavContext'

export default function RegisterPlayer({ numplayer }) {
    const { players, setplayers } = useContext(PlayersContext)
    const { setpage } = useContext(NavContext)

    function register() {
        let allplayers = []
        if (numplayer) {
            for (let index = 0; index < numplayer; index++) {
                let num = index + 1
                let player = { player: 'Jugador: ' + num }
                allplayers.push(player)
            }
            setplayers(allplayers)
            setpage('billar')
        } else {
            alert('Por favor ingrese el numero de jugadores')
        }
    }

    return (
        <View>
            <Pressable onPress={register}>
                <Text style={styles.title}>
                    Jugar
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: '#dad7cd',
        fontSize: 40,
        padding: 20

    }
})