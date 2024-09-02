import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Pages
import HomePage from "./src/screens/HomePage";
import NotFoundPage from "./src/screens/NotFoundPage";
import MapPage from "./src/screens/MapPage";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: true, // Hide header for a cleaner UI
        }}
      >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="React Native Maps" component={MapPage} />
        <Stack.Screen name="NotFound" component={NotFoundPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
