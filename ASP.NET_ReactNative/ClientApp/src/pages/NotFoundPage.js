import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../components/CustomButton";

export default function NotFoundPage() {
  const handleGoHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>404 - Page Not Found</Text>
      <View style={styles.buttonContainer}>
        <CustomButton
          initialText="Back to Home Page"
          updatedText="Returning..."
          onPress={handleGoHome}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FEF2F2", // Equivalent to bg-red-50
  },
  titleText: {
    fontSize: 24, // Equivalent to text-2xl
    fontWeight: "bold",
    textAlign: "center",
    color: "#EF4444", // Equivalent to text-red-500
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 16, // Equivalent to mt-4
  },
});
