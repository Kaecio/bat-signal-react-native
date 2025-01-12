import React from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./style";

interface BatButtonProps {
  text: string;
  onPress: () => void;
}

export function BatButton({ text, onPress }: BatButtonProps) {
  return (
    <View>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
}
