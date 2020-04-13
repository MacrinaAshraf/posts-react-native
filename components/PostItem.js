import React from 'react';
import {StyleSheet, Text, Image, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";

export default function PostItem({ post }) {

    const imgUri = {uri: 'https://source.unsplash.com/random'};

    const navigation = useNavigation();
    return(
        <TouchableOpacity
            style={ styles.container }
            onPress={() => navigation.navigate('SinglePost', {post: post})}
        >
            <Image source={imgUri} style={ styles.image }/>
            <Text style={ styles.postText}>{ post.title }</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    postText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#777',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#bbb',
    },
    image: {
        width: 350,
        height: 200,
    },
})