import React from 'react';
import {StyleSheet, Text, Image, View} from 'react-native';

export default function SinglePost({ route }) {
    const { params } = route;
    const { post } = params;

    const imgUri = {uri: 'https://source.unsplash.com/random'};
    return(
        <View>
            <Image source={imgUri} style={styles.image}/>
            <Text style={ styles.title }>Title:</Text>
            <Text style={ styles.text }>{post.title}</Text>
            <Text style={ styles.title }>Body:</Text>
            <Text style={ styles.text }>{post.body}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        color: '#777',
    },
    title: {
        fontSize: 25,
        color: '#197ae7',
    },
    image: {
        width: 200,
        height: 350,
    },
})