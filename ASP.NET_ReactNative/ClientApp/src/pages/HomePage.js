import * as React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import CustomButton from "../components/CustomButton";

export default function HomePage() {
  const navigation = useNavigation();

  const handleSubmit = () => {
    console.log("Going to Map Page...");
    navigation.navigate("React Native Maps");
  };

  return (
    <View className="flex flex-col w-full h-screen align-center justify-center bg-green-50">
      <Text className="text-2xl font-bold text-center">
        ASP.NET + React Native Demo Project
      </Text>
      <View className="items-center justify-center mt-4">
        <CustomButton
          initialText="Go to Maps"
          updatedText="Loading..."
          onPress={handleSubmit}
        />
      </View>
    </View>
  );
}
