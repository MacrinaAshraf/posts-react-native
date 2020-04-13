import React from 'react';
import {StyleSheet, Text, Button, View} from 'react-native';

export default function Home(props) {

    const { navigation } = props;

    return(
        <View style={ styles.container }>
            <Button
                title={'Go to Posts'}
                onPress={() => navigation.navigate('Posts')}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    postText: {
        fontSize: 25,
        fontWeight: 'bold',
        color: 'white',
    },
    container: {
        marginTop: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
})