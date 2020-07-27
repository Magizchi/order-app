import React, { FunctionComponent } from "react";
import { TextInput } from "react-native-gesture-handler";

interface InputProps {
  onChangeText: Function;
  placeholder: string;
  value: string;
}
const Input: FunctionComponent<InputProps> = ({
  onChangeText,
  placeholder,
  value,
}) => (
  <TextInput
    style={{
      height: 40,
      width: 200,
      margin: 10,
      padding: 10,
      borderColor: "gray",
      borderWidth: 1,
    }}
    onChangeText={(text) => onChangeText(text)}
    placeholder={placeholder}
    value={value}
  />
);

export default Input;
