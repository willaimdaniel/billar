import { StyleSheet, Text, SafeAreaView, FlatList, View } from 'react-native'
import React, { useContext } from 'react'
import { PlayersContext } from '../../context/PlayersContext'

export default function PlayersList() {
    const { players } = useContext(PlayersContext)
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={players}
                horizontal
                keyExtractor={(item) => item.idPlayer}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.item}>
                            <Text style={styles.text}>
                                {item.idPlayer}
                            </Text>
                            <Text style={styles.text}>
                                {item.player}
                            </Text>
                        </View>
                    )
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.3
    },
    item:{
        padding: 5
    },
    text:{
        textAlign: 'center',
        color: '#dad7cd'
    }
})