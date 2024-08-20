import React, { useState } from "react";
import { Text, Pressable } from "react-native";

// Reusable submit button component
// initialText: Text to display when the button is first rendered
// updatedText: Text to display when the button is pressed
// onPress: Function to call when the button is pressed
// Example of using CustomButton by passing in props from the parent component:
// <CustomButton initialText="Submit" updatedText="Submitting..." onPress={handleSubmit} />
const CustomButton = ({ initialText, updatedText, onPress }) => {
  const [buttonText, setButtonText] = useState(initialText);

  const handlePress = () => {
    setButtonText(updatedText);
    onPress();
  };

  return (
    <Pressable
      className="bg-green-500 w-60 py-[10px] px-[50px] rounded-[7px]"
      onPress={handlePress}
    >
      <Text className="font-medium text-white text-[18px] text-center">
        {buttonText}
      </Text>
    </Pressable>
  );
};

export default CustomButton;
