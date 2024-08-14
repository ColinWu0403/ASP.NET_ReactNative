import * as React from "react";
import { View, Text } from "react-native";
import CustomButton from "../components/CustomButton";

export default function NotFoundPage() {
  const handleGoHome = () => {
    navigation.navigate("Home");
  };

  return (
    <View className="flex-1 justify-center items-center bg-red-50">
      <Text className="text-2xl font-bold text-center text-red-500">
        404 - Page Not Found
      </Text>
      <View className="items-center justify-center mt-4">
        <CustomButton
          initialText="Back to Home Page"
          updatedText="Returning..."
          onPress={handleGoHome}
        />
      </View>
    </View>
  );
}
