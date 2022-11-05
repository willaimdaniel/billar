import { StyleSheet, Text, View, Pressable, SafeAreaView } from 'react-native'
import React, {useContext, useState } from 'react'
import { Camera, CameraType } from 'expo-camera'
import { NavContext } from '../context/NavContext';
import { VarContext } from '../context/VarContext';
import Score from '../components/Game/Score';

export default function BillarScreen() {
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const [status, permissionmicrophone] = Camera.useMicrophonePermissions();
    const [video, setvideo] = useState(null)

    const { setpage } = useContext(NavContext)
    const { setvideoGame } = useContext(VarContext)

    async function startGame() {
        if (status.granted === true) {
            const data = await video.recordAsync({ mute: true });
            setvideoGame(data.uri)
            console.log(data.uri);
        } else {
            permissionmicrophone();
        }

    }

    function record() {
        video.stopRecording();
        setpage('var')
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
                type={CameraType.back}
                ref={ref => setvideo(ref)}
            >
                <View style={styles.cameraContainer}>
                    <Score />
                    <View style={{ flexDirection: 'row' }}>

                        <Pressable onPress={startGame}>
                            <Text style={styles.var}>
                                Jugar
                            </Text>
                        </Pressable>
                        <Pressable onPress={record}>
                            <Text style={styles.var}>
                                VAR
                            </Text>
                        </Pressable>
                    </View>
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
    var: {
        fontSize: 30,
        padding: 10,
        color: '#a8dadc'
    }
})