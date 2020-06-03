import React from "react";
import { StatusBar } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { MaterialIcons } from "@expo/vector-icons";
import { DrawerContent } from "./components";
import CardsListScreen from "./screens/List";
import CardUpdateScreen from "./screens/Update";
import CardCreateScreen from "./screens/Create";
import { HeaderActionButton } from "@components";
import { colors, metrics } from "@styles";

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const stackOptions = {
  headerTitleAlign: "center",
  headerTitleStyle: {
    textTransform: "uppercase",
  },
};

const drawerOptions = {
  itemStyle: {
    marginHorizontal: metrics.spacing.regular,
    paddingLeft: metrics.spacing.regular,
    justifyContent: "center",
  },
  labelStyle: {
    fontSize: metrics.fontSize.large,
    fontWeight: "bold",
    textTransform: "uppercase",
  },
};

function CardsStack({ navigation }) {
  return (
    <Stack.Navigator screenOptions={stackOptions}>
      <Stack.Screen
        name="CardsList"
        component={CardsListScreen}
        options={{
          title: "Cards List",
          headerLeft: () => (
            <HeaderActionButton
              onPress={() => navigation.openDrawer()}
              iconLabel="arrowleft"
            />
          ),
          headerRight: () => (
            <HeaderActionButton
              onPress={() => navigation.navigate("CardCreate")}
              iconLabel="plus"
            />
          ),
          headerLeftContainerStyle: { paddingLeft: metrics.spacing.regular },
          headerRightContainerStyle: { paddingRight: metrics.spacing.regular },
        }}
      />
      <Stack.Screen
        name="CardUpdate"
        component={CardUpdateScreen}
        options={{ title: "Card Update" }}
      />
      <Stack.Screen
        name="CardCreate"
        component={CardCreateScreen}
        options={{ title: "Card Create" }}
      />
    </Stack.Navigator>
  );
}

function CardsRoutes() {
  return (
    <>
      <StatusBar
        backgroundColor={colors.secondary.dark}
        barStyle="light-content"
      />
      <Drawer.Navigator
        drawerContent={DrawerContent}
        drawerContentOptions={drawerOptions}
      >
        <Drawer.Screen
          name="Cards"
          component={CardsStack}
          options={{
            drawerIcon: () => (
              <MaterialIcons
                name="edit"
                size={metrics.icon.small}
                color={colors.light}
              />
            ),
          }}
        />
      </Drawer.Navigator>
    </>
  );
}

export default CardsRoutes;
