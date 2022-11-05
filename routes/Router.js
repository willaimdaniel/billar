import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { NavContext } from '../context/NavContext'
import BillarScreen from '../screens/BillarScreen'
import VarScreen from '../screens/VarScreen'

export default function Router() {
    const { page } = useContext(NavContext)

    if (page === 'var') {
        return <VarScreen />
    } else {
        return <BillarScreen />
    }
}