import React, {useState, useEffect} from 'react';
import {StyleSheet, FlatList, Text, Image, View, TouchableOpacity} from 'react-native';
import axios from 'axios'
import PostItem from "../components/PostItem";

export default function Posts() {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios
            .get("https://jsonplaceholder.typicode.com/posts")
            .then(response =>{
                setPosts(response.data)}
                );
    }, []);

    return(
        <View>
            <FlatList
                data={posts}
                renderItem={({ item }) => (
                    <PostItem post={item} />
                )}
                keyExtractor={(item) => item.id.toString()}
                ListEmptyComponent={<Text style={styles.text}>No Posts</Text>}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
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