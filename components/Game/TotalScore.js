import { StyleSheet, Text, View, Pressable } from 'react-native'
import React, { useContext } from 'react'
import { ScoreContext } from '../../context/ScoreContext'

export default function TotalScore() {
    const { scoreOne, scoretwo } = useContext(ScoreContext)

    return (
        <View style={styles.container}>
            <Pressable style={styles.playerOne}>
                <Text style={styles.point}>
                    {scoreOne}
                </Text>
            </Pressable>
            <Pressable style={styles.playerTwo}>
                <Text style={styles.point}>
                    {scoretwo}
                </Text>
            </Pressable>
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
    point:{
        fontSize: 100,
        textAlign: 'center'
    }
})