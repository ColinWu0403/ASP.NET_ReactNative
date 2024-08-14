import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { NativeWindStyleSheet } from "nativewind";

// Pages
import HomePage from "./src/pages/HomePage";
import NotFoundPage from "./src/pages/NotFoundPage";

// Set Global TailwindCSS Stylesheet
NativeWindStyleSheet.setOutput({
  default: "native",
});

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false, // Hide header for a cleaner UI
        }}
      >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="NotFound" component={NotFoundPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
