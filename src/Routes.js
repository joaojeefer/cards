import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import accountConnect from "@account/connect";
import LoadingScreen from "./Account/screens/Loading";
import AccountStack from "./Account/Routes";
import CardsDrawer from "./Cards/Routes";

const Stack = createStackNavigator();

const options = { headerShown: false };

const Routes = ({ authenticated, initSession, status }) => {
  React.useEffect(() => {
    initSession();
  }, []);

  if (status === "NOT_INITIALIZED") {
    return <LoadingScreen />;
  }

  return (
    <Stack.Navigator screenOptions={options}>
      {authenticated ? (
        <Stack.Screen name="CardsDrawer" component={CardsDrawer} />
      ) : (
        <Stack.Screen name="AccountStack" component={AccountStack} />
      )}
    </Stack.Navigator>
  );
};

export default accountConnect(Routes);
