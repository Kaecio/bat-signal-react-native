import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./style";

interface BatButtonProps {
  text: string;
  onPress: () => void;
}

export default function BatButton({ text, onPress }: BatButtonProps) {


  return (
    <View
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
    
  </View>
  )
}