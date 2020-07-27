import React from "react";
import { StyleSheet, View } from "react-native";
import Button from "../components/Button";
import Input from "../components/Input";

const Home = ({ navigation }: any) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  return (
    <View style={styles.container}>
      <Input onChangeText={setEmail} value={email} placeholder="Email ou Nom" />
      <Input
        onChangeText={setPassword}
        value={password}
        placeholder="password"
      />
      <Button title="Valider" onPress={() => navigation.replace("Main")} />
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

export default Home;
