import { StyleSheet, Text, View, Pressable, useWindowDimensions } from 'react-native'
import React, { useState } from 'react'
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

export default function Score({ item }) {
    const { height, width } = useWindowDimensions();
    const [point, setpoint] = useState(0)


    return (
        <View style={{ flex: 1, height, width, justifyContent: 'space-evenly' }}>
            <Text style={styles.text}>
                players
            </Text>
            <View style={styles.points} >
                <Pressable onPress={() => setpoint(point + 1)}>
                    <Ionicons name="add-circle" size={100} color="#dad7cd" />
                </Pressable>
                <Text style={styles.text}>
                    {point}
                </Text>
                <Pressable onPress={()=> setpoint(point - 1)}>
                    <Entypo name="circle-with-minus" size={100} color="#dad7cd" />
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        color: '#dad7cd',
        fontSize: 50
    },
    points: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    }
})