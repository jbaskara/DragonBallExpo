import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../screens/HomeScreen";
import CharactersScreen from "../screens/CharactersScreen";
import PlanetsScreen from "../screens/PlanetsScreen";
import FilterCharactersScreen from "../screens/FilterCharactersScreen";

export type RootStackParamList = {
  Home: undefined;
  Characters: undefined;
  Planets: undefined;
  FilterCharacters: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Characters" component={CharactersScreen} />
        <Stack.Screen name="Planets" component={PlanetsScreen} />
        <Stack.Screen name="FilterCharacters" component={FilterCharactersScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}