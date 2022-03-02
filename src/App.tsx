import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { MainNavigator } from "./navigators";

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
};

export default App;
