import { Alert, View } from "react-native";
import React from "react";
import { BatTextInput } from "../../components/BatTextInput/BatTextInput";
import { BatButton } from "../../components/BatButton/BatButton";
interface FormProps {
  label: string;
  placeholder: string;
  type: string;
}

const textForm: FormProps[] = [
  {
    label: "Name",
    placeholder: "Enter your name",
    type: "text",
  },
  {
    label: "Telephone",
    placeholder: "Enter your telephone",
    type: "number",
  },
  {
    label: "location",
    placeholder: "Enter your location",
    type: "text",
  },
  {
    label: "Obs",
    placeholder: "Enter your obs",
    type: "text",
  },
];

function handleAlert() {
  console.log("The signal has been activated");
  Alert.alert("Bat Signal", "The signal has been activated");
}

export function Forms() {
  return (
    <View>
      {textForm.map((form, index) => (
        <BatTextInput
          key={index}
          text={form.label}
          placeholder={form.placeholder}
        />
      ))}
      <View style={{ marginTop: 10 }}>
        <BatButton text="Submit" onPress={handleAlert} />
      </View>
    </View>
  );
}
