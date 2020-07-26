import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import HomeScreen from "./pages/Home";
import LoginForm from "./pages/LoginForm";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={HomeScreen} />
        <Stack.Screen name="Home" component={LoginForm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
