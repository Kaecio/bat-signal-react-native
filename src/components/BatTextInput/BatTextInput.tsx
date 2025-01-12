import { View, TextInput, Text } from "react-native";
import React from "react";

interface BatTextInputProps {
  text: string;
  placeholder: string;
}

export function BatTextInput({ text, placeholder }: BatTextInputProps) {
  return (
    <View>
      <Text>{text}</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: "gray",
          borderWidth: 1,
          width: 200,
          padding: 10,
          marginTop: 5,
        }}
        placeholder={placeholder}
      />
    </View>
  );
}
