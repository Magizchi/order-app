import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

type RootStackParamList = {
  Home: undefined;
  Profile: { userId: string };
  Feed: { sort: "latest" | "top" } | undefined;
};

type Props = StackScreenProps<RootStackParamList, "Profile">;

const Login = ({ navigation }: Props) => {
  return (
    <View style={styles.container}>
      <Text>LOGIN</Text>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
