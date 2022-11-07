import { StyleSheet, Text, View, useWindowDimensions, TouchableOpacity } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { ScoreContext } from '../../context/ScoreContext';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Score({ player }) {
    const { setscoreOne, setscoretwo } = useContext(ScoreContext)

    const { height, width } = useWindowDimensions();
    const [point, setpoint] = useState(0)
    const [color, setcolor] = useState('#2ec2b3')

    useEffect(() => {
        if (player === 1) {
            setscoreOne(point)
            setcolor('#fcfffa')
        } else {
            setscoretwo(point)
            setcolor('#ff9f1a')
        }
    }, [point])


    return (
        <View style={{ backgroundColor: color, flex: 1 }}>
            <View style={styles.points} >
                <TouchableOpacity onPress={() => setpoint(point + 1)}>
                    <Ionicons name="add-circle" size={50} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setpoint(point - 1)}>
                    <Entypo name="circle-with-minus" size={50} color="black" />
                </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => setpoint(point + 3)}>
                <Text style={styles.text}>+ 3</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setpoint(point + 5)}>
                <Text style={styles.text}>+ 5</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 50
    },
    points: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})