import React from 'react'
import {
    StyleSheet,
    View,
    Text
} from 'react-native'

export function Mine(props) {
    return (
        <View style={styles.container}>
            <View style={styles.coreMine} />
            <View style={styles.line} />
            <View style={[styles.line, { transform: [{ rotate: '45deg' }] }]} />
            <View style={[styles.line, { transform: [{ rotate: '90deg' }] }]} />
            <View style={[styles.line, { transform: [{ rotate: '135deg' }] }]} />
        </View>
    )
}

const styles = StyleSheet.create({

    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    coreMine: {
        backgroundColor: 'black',
        alignContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        height: 14,
        width: 14
    },
    line: {
        backgroundColor: 'black',
        position: 'absolute',
        borderRadius: 3,
        height: 3,
        width: 20,
    }

})