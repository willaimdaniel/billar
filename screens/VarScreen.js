import {
    StyleSheet,
    View,
    SafeAreaView,
    TouchableOpacity,
    Pressable,
    Animated,
    PanResponder,
    useWindowDimensions,
    BackHandler
} from 'react-native'
import React, { useContext, useRef, useState, useEffect } from 'react'
import { Video } from 'expo-av';
import { NavContext } from '../context/NavContext';
import { VarContext } from '../context/VarContext';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const pointsDistance = ([xA, yA], [xB, yB]) => {
    return Math.sqrt(
        Math.pow(xA - xB, 2) + Math.pow(yA - yB, 2)
    );
};

export default function VarScreen() {
    const { setpage } = useContext(NavContext)
    const { videoGame } = useContext(VarContext)

    const [status, setStatus] = useState({});
    const [speed, setspeed] = useState(1)
    const [zoom, setzoom] = useState(1)

    const video = useRef(null);

    const dimensions = useWindowDimensions();

    const pan = useRef(new Animated.ValueXY({ x: 0, y: 0 })).current;
    const scale = useRef(new Animated.Value(1)).current;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderMove: (event, gestureState) => {

                const activeTouches = event.nativeEvent.changedTouches.length;

                if (activeTouches === 1) {
                    pan.setValue({
                        x: gestureState.dx,
                        y: gestureState.dy,
                    });
                } else if (activeTouches >= 2) {
                    const touches = event.nativeEvent.changedTouches;

                    const touchA = touches[0];
                    const touchB = touches[1];

                    const distance = pointsDistance(
                        [touchA.pageX, touchA.pageY],
                        [touchB.pageX, touchB.pageY]
                    );

                    const screenMovedPercents = distance / dimensions.width;

                    scale.setValue(1 + screenMovedPercents * 3);
                }
            },
        })
    ).current;

    useEffect(() => {
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            () => {
                setpage('billar')
                return true
            }
        );

        return () => backHandler.remove();
    }, [])

    function SpeedOption() {
        if (speed === 0.25) {
            return (
                <TouchableOpacity
                    onPress={() => setspeed(1)}
                >
                    <MaterialCommunityIcons name="play-speed" size={24} color="#ffff" />
                </TouchableOpacity>
            )
        } else if (speed === 0.5) {
            return (
                <TouchableOpacity
                    onPress={() => setspeed(0.25)}
                >
                    <MaterialIcons name="slow-motion-video" size={24} color="#ffff" />
                </TouchableOpacity>
            )
        } else {
            return (
                <TouchableOpacity
                    onPress={() => setspeed(0.5)}
                >
                    <MaterialCommunityIcons name="speedometer-slow" size={24} color="#ffff" />
                </TouchableOpacity>
            )
        }
    }

    return (
        <View style={styles.container}>
            <View style={{
                justifyContent: 'space-evenly',
                height: dimensions.height,
                width: dimensions.width * 0.1,
                zIndex: 3
            }}>
                <TouchableOpacity
                    onPress={() => setpage('billar')}
                >
                    <Entypo name="back" size={30} color="#ffff" />
                </TouchableOpacity>
                <SpeedOption />
            </View>
            <Animated.View
                style={{
                    height: '100%',
                    width: '100%',
                    transform: [
                        { translateX: pan.x },
                        { translateY: pan.y },
                        { scale },
                    ],
                }}
                {...panResponder.panHandlers}
            >
                <Pressable
                    style={{ flex: 1 }}
                    onPressIn={
                        () => status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
                    }
                >
                    <Video
                        ref={video}
                        style={{ flex: 1 }}
                        source={{
                            uri: videoGame,
                        }}
                        rate={speed}
                        isLooping
                        onPlaybackStatusUpdate={status => setStatus(() => status)}
                    />
                </Pressable>
            </Animated.View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#588157',
        flexDirection: 'row'
    },
    backGame: {
        padding: 3
    },

})