import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { ScoreContext } from '../../context/ScoreContext'

export default function TotalScore() {
    const { scoreOne, scoretwo, setscoreOne, setscoretwo } = useContext(ScoreContext)

    function reboootPoins() {
        setscoreOne(0)
        setscoretwo(0)
    }

    return (
        <View style={styles.container}>
            <View style={styles.playerOne}>
                <Text style={styles.point}>
                    {scoreOne}
                </Text>
            </View>
            <TouchableOpacity style={{ width: 200 }} onPress={reboootPoins}>
                <Text style={styles.reboot}>
                    Reiniciar
                </Text>
            </TouchableOpacity>
            <View style={styles.playerTwo}>
                <Text style={styles.point}>
                    {scoretwo}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: '#011628'
    },
    playerOne: {
        backgroundColor: '#fcfffa',
        width: '50%'
    },
    playerTwo: {
        backgroundColor: '#ff9f1a',
        width: '50%'

    },
    point: {
        fontSize: 100,
        textAlign: 'center'
    },
    reboot: {
        flex: 1,
        color: '#ffff',
        fontSize: 20,
        textAlign: 'center',
        textAlignVertical: 'center',
    }
})