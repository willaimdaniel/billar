import { StyleSheet, Text, View, Pressable, SafeAreaView } from 'react-native'
import React from 'react'
import { Camera, CameraType } from 'expo-camera'

export default function BillarScreen() {
    const [permission, requestPermission] = Camera.useCameraPermissions();

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet
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
            <Camera style={styles.camera} type={CameraType.front}>
                <View style={styles.cameraContainer}>
                    <Text>algo aca</Text>

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
        //backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    },
})