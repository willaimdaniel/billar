import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { NavContext } from '../context/NavContext'
import PlayerScreen from '../screens/PlayerScreen'
import BillarScreen from '../screens/BillarScreen'

export default function Router() {
    const { page } = useContext(NavContext)

    if (page === 'billar') {
        return <BillarScreen />
    } else {
        return <PlayerScreen />
    }
}