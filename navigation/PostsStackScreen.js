import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import Posts from '../containers/Posts';
import SinglePost from "../containers/SinglePost";
import Home from "../containers/Home";
import { View } from "react-native";

export default function PostStackScreen() {
    const Stack = createStackNavigator();

    return (
        <Stack.Navigator
            initialRouteName={'Home'}
            screenOptions={{headerStyle: {backgroundColor: '#fcb75b'}}}
        >
            <Stack.Screen name={'Home'} component={Home}/>
            <Stack.Screen name='Posts' component={Posts} />
            <Stack.Screen name='SinglePost' component={SinglePost} options={{title: 'Post'}}/>
        </Stack.Navigator>
    );
}
