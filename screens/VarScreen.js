import {
    StyleSheet,
    View,
    TouchableOpacity,
    Animated,
    PanResponder,
    useWindowDimensions
} from 'react-native'
import React, { useContext, useRef, useState } from 'react'
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
            onPanResponderRelease: () => {
                Animated.parallel([
                    Animated.spring(pan, {
                        toValue: {
                            x: 0,
                            y: 0,
                        },
                        useNativeDriver: true,
                    }),
                    Animated.spring(scale, {
                        toValue: 1,
                        useNativeDriver: true,
                    }),
                ]).start();
            },
        })
    ).current;

    return (
        <View style={styles.container}>
            <View style={{ justifyContent: 'space-evenly' }}>
                <TouchableOpacity
                    onPress={() => setpage('billar')}
                >
                    <Entypo name="back" size={30} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setspeed(1)}
                >
                    <MaterialCommunityIcons name="play-speed" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setspeed(0.5)}
                >
                    <MaterialCommunityIcons name="speedometer-slow" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setspeed(0.25)}
                >
                    <MaterialIcons name="slow-motion-video" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <Animated.View
                style={{
                    flex: 1,
                    height: dimensions.height,
                    width: dimensions.width,
                    transform: [
                        { translateX: pan.x },
                        { translateY: pan.y },
                        { scale },
                    ],
                }}
                {...panResponder.panHandlers}
            >
                <Video
                    ref={video}
                    style={{ flex: 1 }}
                    source={{
                        uri: videoGame,
                    }}
                    useNativeControls
                    rate={speed}
                    resizeMode="contain"
                    isLooping={false}
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
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