import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Header() {
    return(
        <View style={styles.header}>
            <Text style={styles.textHeader}>Posts</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textHeader: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        padding: 10,
    },
    header: {
        backgroundColor: 'coral',
        height: 60,
    },
})