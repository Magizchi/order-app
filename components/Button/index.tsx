import React, { FunctionComponent } from "react";
import { Button, StyleSheet } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

interface ButtonProps {
  title: string;
  onPress: Function;
  accessibilityLabel?: string;
}

const Btn: FunctionComponent<ButtonProps> = ({
  title: text,
  onPress: func,
}) => (
  <TouchableHighlight
    style={{
      height: 40,
      width: 160,
      borderRadius: 10,
      backgroundColor: "transparent",
      marginLeft: 50,
      marginRight: 50,
      marginTop: 20,
    }}
  >
    <Button title={text} onPress={() => func()} />
  </TouchableHighlight>
);

export default Btn;

const styles = StyleSheet.create({
  button: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
