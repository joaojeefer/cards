import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Provider } from "react-redux";
import store from "./src/store";
import Routes from "./src/Routes";
import { navigationTheme } from "@styles";

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer theme={navigationTheme}>
        <Routes />
      </NavigationContainer>
    </Provider>
  );
}

export default App;
