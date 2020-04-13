import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Profile() {
    return(
        <View style={styles.header}>
            <Text style={styles.textHeader}>Macrina Ashraf</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textHeader: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#777',
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})