import React from "react";
import { View, Image } from "react-native";
import batLogo from "../../../assets/image/batLogo.png";
import { styles } from "./styles";

export function BatLogo() {
  return (
    <View style={styles.container}>
      <Image source={batLogo} style={styles.img} alt="batlogo" />
    </View>
  );
}
