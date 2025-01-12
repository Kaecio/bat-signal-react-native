import { View, TextInput, Text } from "react-native";
import React from "react";
import { styles } from "./style";

interface BatTextInputProps {
  text: string;
  placeholder: string;
}

export function BatTextInput({ text, placeholder }: BatTextInputProps) {
  return (
    <View>
      <Text style={styles.text}>{text}</Text>
      <View style={styles.container}>
        <TextInput style={styles.inputText} placeholder={placeholder} />
      </View>
    </View>
  );
}
