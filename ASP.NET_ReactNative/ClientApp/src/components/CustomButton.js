import React, { useState } from "react";
import { Text, Pressable, StyleSheet } from "react-native";

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
    <Pressable style={styles.button} onPress={handlePress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#38a169",
    width: 240,
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "500",
    color: "#ffffff",
    fontSize: 18,
    textAlign: "center",
  },
});

export default CustomButton;
