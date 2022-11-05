import { StyleSheet, Text, SafeAreaView, FlatList, View, useWindowDimensions } from 'react-native'
import React, { useContext } from 'react'
import { PlayersContext } from '../../context/VarContext'
import Score from './Score'

export default function PlayersList() {
    const { players } = useContext(PlayersContext)
    const { width } = useWindowDimensions();

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={players}
                horizontal
                keyExtractor={(item) => item.player}
                snapToInterval={width}
                showsHorizontalScrollIndicator={false}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.item}>
                            <Score item={item} />
                        </View>
                    )
                }}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    item: {
        padding: 5
    },

})