import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";

export default function HomePage() {
  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log("Going to Map Page...");
    navigation.navigate("React Native Maps");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ASP.NET + React Native Demo Project</Text>
      <View style={styles.buttonContainer}>
        <CustomButton
          initialText="Go to Maps"
          updatedText="Loading..."
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#F0FDF4", // Equivalent to bg-green-50
    width: "100%",
    height: "100%",
  },
  title: {
    fontSize: 24, // Equivalent to text-2xl
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16, // Equivalent to mt-4
  },
});
