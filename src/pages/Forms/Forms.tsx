import { View, Text } from "react-native";
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
    label: "Tepephone",
    placeholder: "Enter your email",
    type: "email",
  },
  {
    label: "location",
    placeholder: "Enter your password",
    type: "password",
  },
  {
    label: "Obs",
    placeholder: "Enter your obs",
    type: "text",
  },
];

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
        <BatButton text="Submit" onPress={() => console.log("submit")} />
      </View>
    </View>
  );
}
