import React from 'react';
import RootNavigator from "./navigation/index";
// import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from "@react-navigation/native";
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// import Posts from './components/Posts';
// import Profile from "./components/Profile";

export default function App() {
  // const Tabs = createBottomTabNavigator();

  return (
      <RootNavigator />
      // <NavigationContainer>
      //   <Tabs.Navigator>
      //     <Tabs.Screen name='Posts' component={Posts}/>
      //     <Tabs.Screen name='Profile' component={Profile}/>
      //   </Tabs.Navigator>
      // </NavigationContainer>
  );
}

