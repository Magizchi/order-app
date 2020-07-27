import React from "react";
import { StyleSheet, View } from "react-native";
import Button from "../components/Button";

const LoginForm = () => {
  return (
    <View style={styles.container}>
      <Button title="Scanner" onPress={() => console.log("jen")} />
      <Button title="Commander" onPress={() => console.log("jen")} />
      <Button title="Ajouter" onPress={() => console.log("jen")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default LoginForm;
