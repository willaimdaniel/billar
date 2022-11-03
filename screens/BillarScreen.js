import { StyleSheet, Text, View, Pressable, SafeAreaView } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Camera, CameraType } from 'expo-camera'
import PlayersList from '../components/Game/PlayersList';

export default function BillarScreen() {
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [video, setvideo] = useState(null)

    //useEffect(() => {
    //    (
    //        async () => {
    //            if (video) {
    //                const data = await video.recordAsync();
    //                console.log(data.uri);
    //            }
    //        }
    //    )()
    //}, [])

    function record() {
        //video.stopRecording();
        //console.log(video);
        console.log('dete');
    }

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: 'center' }}>Necesitamos tu permiso para mostrar la cámara.</Text>
                <Pressable onPress={requestPermission}>
                    <Text style={{ textAlign: 'center', padding: 10, fontSize: 20 }}>
                        Conceder permiso
                    </Text>
                </Pressable>
            </View>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <Camera
                style={styles.camera}
                type={CameraType.front}
                ref={ref => setvideo(ref)}
            >
                <View style={styles.cameraContainer}>
                    <PlayersList />
                    <Pressable onPress={record}>
                        <Text style={{ fontSize: 20, padding: 10}}>
                            VAR
                        </Text>
                    </Pressable>
                </View>
            </Camera>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#a8dadc'
    },
    camera: {
        flex: 1,
    },
    cameraContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})