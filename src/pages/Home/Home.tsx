import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text } from "react-native";
import { styles } from "./styles";
import { BatButton } from "../../components/BatButton/BatButton";
import { Forms } from "../Forms/Forms";
import { BatLogo } from "../../components/BatLogo/BatLogo";

export function Home() {
  const [showForm, setShowForm] = useState(true);

  function handleShowForm() {
    console.log("show form");
    setShowForm(true);
  }

  return (
    <View style={styles.container}>
      <View>
        <BatLogo />
      </View>
      {showForm ? (
        <Forms />
      ) : (
        <BatButton text="Ativate Bat Signal" onPress={handleShowForm} />
      )}
      <StatusBar style="auto" />
    </View>
  );
}
