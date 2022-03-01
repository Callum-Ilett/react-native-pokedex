import React from "react";
import { Routes } from "../routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Generations } from "../screens";

export type MainStackParamList = {
  [Routes.Generations]: undefined;
};

const MainNavigator = () => {
  const { Navigator, Screen } =
    createNativeStackNavigator<MainStackParamList>();

  return (
    <Navigator>
      <Screen name={Routes.Generations} component={Generations} />
    </Navigator>
  );
};

export default MainNavigator;
