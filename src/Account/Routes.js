import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/Home";
import LoginScreen from "./screens/Login";
import CreateAccountScreen from "./screens/CreateAccount";
import RecoverPasswordScreen from "./screens/RecoverPassword";

const Stack = createStackNavigator();

const options = { headerShown: false };

function AccountRoutes() {
  return (
    <Stack.Navigator screenOptions={options}>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
      <Stack.Screen name="RecoverPassword" component={RecoverPasswordScreen} />
    </Stack.Navigator>
  );
}

export default AccountRoutes;
