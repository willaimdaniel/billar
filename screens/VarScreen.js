import { StyleSheet, Text, View, Pressable, useWindowDimensions } from 'react-native'
import React, { useContext, useRef, useState } from 'react'
import { Video } from 'expo-av';
import { NavContext } from '../context/NavContext';
import { VarContext } from '../context/VarContext';
import { Entypo } from '@expo/vector-icons';

export default function VarScreen() {
    const { setpage } = useContext(NavContext)
    const { videoGame } = useContext(VarContext)
    const {width, height} = useWindowDimensions();
    const [status, setStatus] = useState({});

    const video = useRef(null);

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.backGame}
                onPress={() => setpage('billar')}
            >
                <Entypo name="back" size={30} color="black" />
            </Pressable>
            <View style={styles.video}>
                <Video
                    ref={video}
                    style={{height: height * 0.89, width}}
                    source={{
                        uri: videoGame,
                    }}
                    useNativeControls
                    resizeMode="contain"
                    isLooping={false}
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#588157',
    },
    video: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row'
    },
    backGame: {
        padding: 3
    },
   
})