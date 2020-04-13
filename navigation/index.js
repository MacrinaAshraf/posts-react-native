import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import PostsStackScreen from './PostsStackScreen';
import Profile from "../components/Profile";
import { Text } from "react-native";

export default function RootNavigator() {
    const BottomTabs = createBottomTabNavigator();
    const Stack = createStackNavigator();

    return (
        <NavigationContainer>
            <BottomTabs.Navigator tabBarOptions={{activeBackgroundColor: '#fcb75b', activeTintColor: 'black'}}>
                <BottomTabs.Screen name='Posts' component={PostsStackScreen} options={{tabBarIcon: () => <FontAwesome name='comments-o'/>}}/>
                <BottomTabs.Screen name='Profile' component={Profile} options={{tabBarIcon: () => <FontAwesome name='user'/>}}/>
            </BottomTabs.Navigator>
        </NavigationContainer>
    );
}
