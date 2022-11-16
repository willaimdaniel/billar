import { StyleSheet, Text, View, useWindowDimensions, TouchableOpacity } from 'react-native'
import React, { useContext, useState, useEffect } from 'react'
import { ScoreContext } from '../../context/ScoreContext';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Score({ player }) {
    const { setscoreOne, scoreOne, setscoretwo, scoretwo } = useContext(ScoreContext)

    const { height, width } = useWindowDimensions();
    const [point, setpoint] = useState(0)
    const [color, setcolor] = useState('#2ec2b3')

    useEffect(() => {
        if (player === 1) {
            setcolor('#fcfffa')
        } else {
            setcolor('#ff9f1a')
        }
    }, [])

    function _point(add) {
        if (player === 1) {
            setscoreOne(scoreOne + add)
        } else {
            setscoretwo(scoretwo + add)
        }
    }

    return (
        <View style={{ backgroundColor: color, flex: 1 }}>
            <View style={styles.points} >
                <TouchableOpacity onPress={() => _point(+ 1)}>
                    <Ionicons name="add-circle" size={50} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => _point(- 1)}>
                    <Entypo name="circle-with-minus" size={50} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.points}>
                <TouchableOpacity onPress={() => _point(+ 2)}>
                    <Text style={styles.text}>+ 2</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => _point(+ 3)}>
                    <Text style={styles.text}>+ 3</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.points}>
                <TouchableOpacity onPress={() => _point(+ 4)}>
                    <Text style={styles.text}>+ 4</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => _point(+ 5)}>
                    <Text style={styles.text}>+ 5</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.points}>
                <TouchableOpacity onPress={() => _point(+ 6)}>
                    <Text style={styles.text}>+ 6</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => _point(+ 7)}>
                    <Text style={styles.text}>+ 7</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.points}>
                <TouchableOpacity onPress={() => _point(+ 8)}>
                    <Text style={styles.text}>+ 8</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => _point(+ 9)}>
                    <Text style={styles.text}>+ 9</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        fontSize: 30
    },
    points: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})