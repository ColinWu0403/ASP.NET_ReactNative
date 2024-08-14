import * as React from "react";
import { View, Text } from "react-native";
import CustomButton from "../components/CustomButton";

export default function HomePage() {
  const handleSubmit = () => {
    console.log("Submitting...");
  };

  return (
    <View className="flex flex-col w-full h-screen align-center justify-center bg-green-50">
      <Text className="text-2xl font-bold text-center">
        ASP.NET + React Native
      </Text>
      <View className="items-center justify-center mt-4">
        <CustomButton
          initialText="Submit"
          updatedText="Submitting..."
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
}
